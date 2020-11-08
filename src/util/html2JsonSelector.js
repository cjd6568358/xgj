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
      return Math.ceil(this/38)
    };
    head title{$documentTitle};
    .mainbox.forumlist tbody:has(.lastpost a)@forumList{
        h2 a[href=$href]{$name}
    }
    .mainbox.threadlist table:has(thead.separation)@threadList{
        thead.separation td b{$name};
        tbody:has(th)@value{
            th span[id^=thread_] a[href=$href]{$title};
            .nums{$nums};
            td.icon img[alt=$type];
            span.bold{$permission|Number}
            .author cite{html($thanks|replace(/<a(.*)absmiddle">/g,'')|Number)}
            .author em{$date}
        }
    };
    .mainbox.threadlist+.pages_btns .pages@pageInfo|pack{
        $pageNum = 1;
        $pageCount = 1;
        strong{$pageNum|Number};
        em{$pageCount|Number|MathCeil};
    }
    `,
    thread: `
    filter MathCeil() {
        return Math.ceil(this/10)
    };
    form input[name=formhash][value=$formhash];
    #postform[action=$replyUrl];
    head title{$documentTitle};
    form .mainbox.viewthread@postList{
        .postauthor cite a[id^=userinfo]{$authorName};
        .postauthor p:nth-of-type(1){$authorLevel};
        .postcontent .postinfo strong[id=$pid|replace(/postnum_/g,'')][onclick=$absPostUrl|replace(/',.*/g,'')|match(/viewth.*/g)|first]{$postFloor}
        .postcontent .postinfo{find('小',$postTime|replace(/^.*发表于 /g,''), '只看该作者')}
        .postcontent .postmessage>h2{html($postTitle)}
        .postcontent .postmessage .notice{html($content|replace(/border(.*)alt=""/g,""))}
        .postcontent .postmessage .t_msgfont{html($content|replace(/border(.*)alt=""/g,""))}
    };
    form+.pages_btns .pages@pageInfo|pack{
        $pageNum = 1;
        $pageCount = 1;
        strong{$pageNum|Number};
        em{$pageCount|Number|MathCeil};
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
    `,
    search: `
    filter MathCeil() {
      return Math.ceil(this/38)
    };
    .mainbox.threadlist tbody@threadList{
        th a[href=$tid|replace('viewthread.php?tid=','')|replace(/&highlight=.*$/g,'')]{$title};
        td.author em{$date};
        td.nums{$nums};
        td.nums strong{$replyCount};
    };
    .mainbox.threadlist+.pages_btns .pages em{$pageCount|Number|MathCeil};
    .mainbox.threadlist+.pages_btns .pages a:nth-of-type(1)[href=$searchHref];
    `
}