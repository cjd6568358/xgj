<template>
	<div class="calendar-wrap">
		<svg style="position: absolute; width: 0; height: 0;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<defs>
				<symbol id="icon-arrow" viewBox="0 0 32 32">
					<title>arrow</title>
					<path d="M21.653 15.093l-10.027-9.28c-0.427-0.373-1.067-0.32-1.387 0.053-0.373 0.427-0.32 1.013 0.053 1.387l9.227 8.587-9.227 8.96c-0.373 0.373-0.427 1.013 0 1.44 0.373 0.373 1.013 0.427 1.44 0l10.027-9.707c0.32-0.373 0.32-1.013-0.107-1.44 0.053 0 0 0 0 0z"></path>
				</symbol>
			</defs>
		</svg>
		<div class="calendar-header">
			<svg class="left" @click="prevClick">
				<use xlink:href="#icon-arrow"></use>
			</svg>
			<div class="title">{{headerText}}</div>
			<svg class="right" @click="nextClick">
				<use xlink:href="#icon-arrow"></use>
			</svg>
		</div>
		<div class="calendar-body">
			<div class="row-header">
				<div class="cell0">日</div>
				<div class="cell1">一</div>
				<div class="cell2">二</div>
				<div class="cell3">三</div>
				<div class="cell4">四</div>
				<div class="cell5">五</div>
				<div class="cell6">六</div>
			</div>
			<div class="row" v-for="(week,i) of weeks" :key="i">
				<div @click="cellClick(day)" :class="getDayClass(day)" v-for="(day,ii) of week" :key="ii">
					<span>{{day.isToday? '今': day.day}}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { getTotalDaysArr } from "../../util/index";
export default {
	name: "Calendar",
	props: {
		defaultDate: {
			type: Number,
			default: Date.now()
		},
		headerFmt: {
			type: String,
			default: "yyyy年M月"
		},
		mapData: {
			type: Array,
			default: () => []
		}
	},
	data() {
		let date = null;
		const { defaultDate } = this.$props;
		if (
			typeof defaultDate === "string" ||
			typeof defaultDate === "number"
		) {
			date = new Date(defaultDate);
		} else {
			date = defaultDate;
		}
		return {
			activeItem: {},
			year: date.getFullYear(),
			month: date.getMonth() + 1
		};
	},
	computed: {
		headerText() {
			const { year, month } = this.$data;
			return new Date(year, month - 1, 1).Format(this.$props.headerFmt);
		},
		totalDays() {
			const { mapData } = this.$props;
			const { year, month } = this.$data;
			let now = Date.now();
			return getTotalDaysArr(year, month).map(day => {
				let dateTime = new Date(year, month - 1, day);
				let item = {
					year,
					month,
					day,
					timestamp: dateTime.getTime(),
					dayOfWeek: dateTime.getDay()
				};
				if (now - dateTime > 0 && now - dateTime < 86400000) {
					item.isToday = true;
				}
				// 附加数据
				if (
					mapData &&
					mapData.length &&
					mapData[0].year == year &&
					mapData[0].month == month
				) {
					for (let i = 0; i < mapData.length; i++) {
						if (mapData[i].day == day) {
							item.data = mapData[i].data;
							mapData.splice(i, 1);
							break;
						}
					}
                }
				return item;
			});
		},
		weeks() {
			let totalDays = this.totalDays.slice();
			var weeks = [];
			if (totalDays) {
				// 由于第一周数据可能不满7个,先截取第一周数据
				var firstSundayIndex = -1;
				totalDays.forEach(function(item, i) {
					if (item.dayOfWeek == 6 && firstSundayIndex == -1) {
						firstSundayIndex = i;
					}
				});
				weeks.push(totalDays.splice(0, firstSundayIndex + 1));
				// 按7的倍数截取剩下的数据
				var len = totalDays.length;
				for (var i = 0; i < len; i += 7) {
					weeks.push(totalDays.slice(i, i + 7));
				}
			}
			// 上一月日期
			let firstWeek = weeks[0];
			let { year, month } = this.$data;
			let prev = {
				year: month - 1 === 0 ? year - 1 : year,
				month: month - 1 === 0 ? 12 : month - 1
			};
			let prevMonthTotalDays = getTotalDaysArr(prev.year, prev.month).map(
				day => {
					let dateTime = new Date(prev.year, prev.month - 1, day);
					let item = {
						year: prev.year,
						month: prev.month,
						day,
						disabled: true,
						timestamp: dateTime.getTime(),
						dayOfWeek: dateTime.getDay()
					};
					return item;
				}
			);
			firstWeek.unshift(
				...prevMonthTotalDays.slice(firstWeek.length - 7)
			);
			weeks[0] = firstWeek;
			// 下一月日期
			let lastWeek = weeks[weeks.length - 1];
			let next = {
				year: month + 1 === 13 ? year + 1 : year,
				month: month + 1 === 13 ? 1 : month + 1
			};
			let nextMonthTotalDays = getTotalDaysArr(next.year, next.month).map(
				day => {
					let dateTime = new Date(next.year, next.month - 1, day);
					let item = {
						year: next.year,
						month: next.month,
						day,
						disabled: true,
						timestamp: dateTime.getTime(),
						dayOfWeek: dateTime.getDay()
					};
					return item;
				}
			);
			lastWeek = lastWeek.concat(
				nextMonthTotalDays.slice(0, 7 - lastWeek.length)
			);
			weeks[weeks.length - 1] = lastWeek;
			return weeks;
		}
	},
	mounted() {
		// 高亮今日
		if (!this.$data.activeItem.date) {
			this.$data.activeItem = this.totalDays.filter(
				item => item.isToday
			)[0];
			this.$emit("cellClick", this.$data.activeItem);
		}
	},
	methods: {
		prevClick: function() {
			let year = this.$data.year;
			let month = this.$data.month;
			if (month == 1) {
				year = year - 1;
				month = 12;
			} else {
				month--;
			}
			this.$data.year = year;
			this.$data.month = month;
			this.$emit("prevClick", { year, month });
		},
		nextClick: function() {
			let year = this.$data.year;
			let month = this.$data.month;
			if (month == 12) {
				year = year + 1;
				month = 1;
			} else {
				month++;
			}
			this.$data.year = year;
			this.$data.month = month;
			this.$emit("nextClick", { year, month });
		},
		cellClick(day) {
			if (
				day.disabled ||
				this.$data.activeItem.timestamp == day.timestamp
			) {
				return;
			}
			this.$data.activeItem = day;
			this.$emit("cellClick", day);
		},
		getDayClass(day) {
			let tmp = {};
			if (
				this.$data.activeItem &&
				day.timestamp == this.$data.activeItem.timestamp
			) {
				tmp.active = true;
			}
			if (day.data) {
				tmp["has-data"] = true;
			}
			if (day.disabled) {
				tmp["disabled"] = true;
			}
			tmp["cell" + day.dayOfWeek] = true;
			return tmp;
		}
	}
};
</script>
<style lang="scss" scoped>
.calendar-wrap {
	display: flex;
	flex-direction: column;
	font-size: 32px;
	background: #fff;
	padding: 10px 0;
	box-shadow: 4px 4px 4px #ddd;
}

.calendar-header {
	text-align: center;
	display: flex;
	align-items: center;
	height: 80px;
	line-height: 80px;
	padding: 0 6.5vw;
	.title {
		flex: 1;
	}
	svg.left,
	svg.right {
		width: 48px;
		height: 48px;
	}
	svg.left {
		transform: rotate(180deg) translateX(50%);
	}
	.right {
		transform: translateX(50%);
	}
}

.calendar-body {
	.row,
	.row-header {
		display: grid;
		grid-template-columns: 13vw auto 13vw auto 13vw auto 13vw auto 13vw auto 13vw auto 13vw;
		margin-bottom: 10px;
	}
	.row-header {
		color: #d3d3d3;
	}
	.cell0,
	.cell1,
	.cell2,
	.cell3,
	.cell4,
	.cell5,
	.cell6 {
		height: 13vw;
		display: flex;
		align-items: center;
		justify-content: center;
		grid-row: 1;
	}
	.row .cell0,
	.row .cell6 {
		color: red;
	}

	.cell0 {
		grid-column: 1;
	}
	.cell1 {
		grid-column: 3;
	}
	.cell2 {
		grid-column: 5;
	}
	.cell3 {
		grid-column: 7;
	}
	.cell4 {
		grid-column: 9;
	}
	.cell5 {
		grid-column: 11;
	}
	.cell6 {
		grid-column: 13;
	}

	.active {
		border-radius: 50%;
		border: 1px solid #d3d3d3;
	}

	.disabled {
		opacity: 0.35;
	}

	.has-data {
		border-radius: 50%;
		background-color: #1abdca;
		color: #fff;
		&.active {
			background-color: #0e9aa7;
		}
	}
}
</style>
