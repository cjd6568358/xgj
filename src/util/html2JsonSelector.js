export default {
    webSiteList: `
    li@webSiteList{
        &{$}
    };
    `,
    index: `
    .mainbox.forumlist@areaList{
        h3 a{$name};
        tbody:has(.lastpost a)@value{
            h2 a[href=$value]{$name}
        }
    };
    #creditlist_menu>li@creditList{
        &{$}
    };
    #creditlist{$username}
    `,
    forum: `
    filter MathCeil() {
        return Math.ceil(this/10)
    };
    head title{$documentTitle};
    table:has(thead.separation)@forumList{
        thead.separation td b{$name};
        tbody:has(th)@value{
            th span[id^=thread_] a[href=$href]{$title};
            .nums{$nums};
            td.icon img[alt=$type];
            span.bold{$permission|Number}
            .author cite{node($thanks|html|replace(/<a(.*)absmiddle">/g,'')|Number)}
        }
    };
    .mainbox.threadlist+.pages_btns .pages@pageInfo|pack{
        $currPageNum = 1;
        $totalPageNum = 1;
        $nextPageNum = null;
        $nextUrl = null;
        strong{$currPageNum|Number};
        strong+a[href=$nextUrl]{$nextPageNum|Number};
        em{$totalPageNum|Number|MathCeil};
    }
    `,
    thread: `
    filter MathCeil() {
        return Math.ceil(this/10)
    };
    form input[name=formhash][value=$formhash];
    form #ajax_favorite[href=$tid|replace(/^my.php.*tid=/g,'')];
    head title{$documentTitle};
    form .mainbox.viewthread@postList{
        .postauthor cite a[id^=userinfo]{$authorName};
        .postauthor p:nth-of-type(1){$authorLevel};
        // .postauthor .profile{$authorProfile}
        .postcontent .postinfo strong[id=$pid|replace(/postnum_/g,'')][onclick=$absPostUrl|replace(/',.*/g,'')|match(/viewth.*/g)|first]{$postFloor}
        .postcontent .postinfo{find('小',$postTime, '只看该作者')}
        .postcontent .postmessage>h2{node($postTitle|html)}
        .postcontent .postmessage .t_msgfont{node($content|html|replace(/border(.*)alt=""/g,""))}
    };
    form+.pages_btns .pages@pageInfo|pack{
        $currPageNum = 1;
        $totalPageNum = 1;
        $nextPageNum = null;
        $nextUrl = null;
        strong{$currPageNum|Number};
        strong+a[href=$nextUrl]{$nextPageNum|Number};
        em{$totalPageNum|Number|MathCeil};
    }
    `,
    my: `
    .credits_info ul>li@creditList{
        &{$|trim()}
    };
    #wrapper #menu ul li:nth-child(2) a[href=$formhash|split('formhash=')|slice(1,2)|first];
    #menu li cite a{$username};
    .mainbox table:nth-of-type(1) tbody tr@recentTopics{
        td:nth-child(1) a[href=$href]{$title}
        td:nth-child(1) a[href=$tid|split('-')|slice(1,2)|first];
        td:nth-child(2){$forum}
        td:nth-child(3) a[href=$lastPostUrl]{$lastPost}
        td:nth-child(4){$status}
    };
    .mainbox table:nth-of-type(2) tbody tr@recentReply{
        td:nth-child(1) a[href=$href]{$title}
        td:nth-child(1) a[href=$tid|replace(/^redirect.*ptid=/g,'')];
        td:nth-child(2){$forum}
        td:nth-child(3){$lastPost}
        td:nth-child(4){$status}
    }
    `
}