var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
var url = './health_article.json';
var url2 = './news_article.json';
xhr.open('GET', url, true);
xhr2.open('GET', url2, true);
xhr.responseType = 'json';
xhr2.responseType = 'json';
xhr.onload = function(){
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
  
        var title = document.createElement('h2');
        title.textContent = article.title;
  
        var description = document.createElement('p');
        description.textContent = article.description;
  
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';
  
        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
          var listItem = document.createElement('li');
          listItem.textContent = way;
          waysList.appendChild(listItem);
        });
  
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';
  
        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
          var listItem = document.createElement('li');
          listItem.textContent = benefit;
          benefitsList.appendChild(listItem);
        });
  
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
  
        articlesDiv.appendChild(articleDiv);
      });  
}

xhr2.onload = function(){
    var news = xhr2.response.news;
    var newsDiv = document.getElementById('news');

    news.forEach(function(notice){

        var newDiv = document.createElement('div');
        newDiv.classList.add('new');

        var title2 = document.createElement('h2');
        title2.textContent = notice.title;

        var description2 = document.createElement('p');
        description2.textContent = notice.description;
        description2.style.textAlign = 'justify';

        newDiv.appendChild(title2);
        newDiv.appendChild(description2);

        newsDiv.appendChild(newDiv);
    });
}

xhr.send();
xhr2.send();

