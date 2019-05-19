
$(function () {
    for (const { id, category, page, topic, date, description } of articles) {
        let cat = categories.find(x => x.id === category).name;
        $("#article-section").append("<article class='format-standard type-post hentry clearfix'>"+
                            "<header class='clearfix'><h3 class='post-title'><a href='"+page+"'>"+
                            topic+"</a></h3>"+
                            "<div class='post-meta clearfix'><span class='date'>"+date+"</span>"+
                            "<span class='category'><a href='#' title='View all posts in "+cat+"'>"+
                            cat+"</a></span></header>"+
                            "<p>"+description+"<a class='readmore-link' href='pidiadhan.html'>Read more</a></p>"+
                            "</article>");

        $("#article-side-list").append("<li class='article-entry standard'>"+
                            "<h4><a href='"+page+"'>"+topic+"</a></h4>"+
                            "<span class='article-meta'>"+date+" in <a href='#'"+ 
                            "title='View all posts in "+cat+"'>"+cat+"</a></span>"+
                            "</li>");

        $("#top-breadcrumb").append("<li><a href='index.html'>Iraivanadi</a><span class='divider'>/</span></li>"+
                                    "<li><a href='#' title='View all posts in "+cat+"'>"+
                                    cat+"</a> <span class='divider'>/</span></li>"+
                                    "<li class='active'>"+topic+"</li>");

        $("#category-side-list").append("<li><a href='#' title="+cat+">"+cat+"</a> </li>");
        $("#category-bottom-list").append("<li><a href='#' title="+cat+">"+cat+"</a> </li>");
        $("#tag-list").append("<a href='#' rel='tag'>"+cat+"</a>");
        $("#whoami").append(whoami);
                            
    }
});


                                                       