
$(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const tag = urlParams.get('tag');
    const cat = urlParams.get('cat');
    loadArticles(tag, cat);
    loadCategories();
    loadTags();
    $("#whoami").append(whoami);
});

function loadArticles(tgs, cat){

    var filteredArticles = [];
    if( tgs ){
        $.each(articles, function (idx, obj) {
            if (obj.tag == parseInt(tgs)) {
                filteredArticles.push(obj);
            }
        });
    } else if( cat ){
        $.each(articles, function (idx, obj) {
            if (obj.category == parseInt(cat)) {
                filteredArticles.push(obj);
            }
        });
    }else{
        filteredArticles = articles;
    }

    for (const {tag, page, topic, date} of articles) {
        let tg = tags.find(x => x.id === tag).name;
        $("#article-side-list").append("<li class='article-entry standard'>"+
            "<h4><a href='"+page+"'>"+topic+"</a></h4>"+
            "<span class='article-meta'>"+date+" in <a href='index.html?tag="+tag+"'"+ 
            "title='View all posts in "+tg+"'>"+tg+"</a></span>"+
            "</li>");
    
    }

    for (const { id, tag, page, topic, date, description, category } of filteredArticles) {
        
        let tg = tags.find(x => x.id === tag).name;
        let ct = categories.find(x => x.id === category).name;
        $("#article-section").append("<article class='format-standard type-post hentry clearfix'>"+
            "<header class='clearfix'><h3 class='post-title'><a href='"+page+"'>"+
            topic+"</a></h3>"+
            "<div class='post-meta clearfix'><span class='date'>"+date+"</span>"+
            "<span class='category'><a href='index.html?tag="+tag+"' title='View all posts in "+tg+"'>"+
            tg+"</a></span></header>"+
            "<p>"+description+"<a class='readmore-link' href='pidiadhan.html'>Read more</a></p>"+
            "</article>");

        if( $("#page-id") && tag == parseInt($("#page-id").val())){                    
            $("#top-breadcrumb").append("<li><a href='index.html'>Iraivanadi</a><span class='divider'>/</span></li>"+
                "<li><a href='index.html?tag="+tag+"' title='View all posts in "+tg+"'>"+
                tg+"</a> <span class='divider'>/</span></li>"+
                "<li class='active'>"+topic+"</li>");

            $("#tag-list").append("<a href='index.html?tag="+tag+"' rel='tag'>"+tg+"</a>");
        }
    }
}

function loadCategories(){
    for(const {id, name} of categories){
        $("#category-side-list").append("<li><a href='index.html?cat="+id+"' title="+name+">"+name+"</a> </li>");
        $("#category-bottom-list").append("<li><a href='index.html?cat="+id+"' title="+name+">"+name+"</a> </li>");
    }
}

function loadTags(){
    for(const {id, name} of tags){
        $("#tag-side-list").append("<a href='index.html?tag="+id+"' class='btn btn-mini'>"+name+"</a>");
        
    }
}


                                                       