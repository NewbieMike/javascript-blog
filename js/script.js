'use strict';

const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement)

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    };

    /* [DONE] get 'href' attribute from the clicked link */
    const linkArticle = clickedElement.getAttribute("href");
    console.log(linkArticle);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const correctArticle = document.querySelector(linkArticle);


    /* [DONE] add class 'active' to the correct article */
    correctArticle.classList.add('active');
    console.log(correctArticle);
  }



const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author';

function  generateTitleLinks(customSelector = ''){
    console.log('Generate links')

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    //console.log(titleList);
    titleList.innerHTML='';
    /* [DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    console.log(customSelector)
    console.log(articles)
    /* [DONE] get the article id */
    for (let article of articles){
        const articleId=article.getAttribute('id');
        //console.log(articleId);

    /* [DONE] find the title element */
    /* [DONE] get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    //console.log(articleTitle);

    /* [DONE] create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    //console.log(linkHTML)

    titleList.insertAdjacentHTML('beforeend', linkHTML)

    /* insert link into titleList */
    const links = document.querySelectorAll('.titles a');
    //console.log(links)

    for(let link of links){
    link.addEventListener('click', titleClickHandler);
        }
    }
}

generateTitleLinks();

function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) {
    const articleId = article.getAttribute('id');
        console.log(articleId);

    /* find tags wrapper */
    const tagList = article.querySelector(optArticleTagSelector);
    console.log(tagList)
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags)

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
      console.log(tag);
      /* generate HTML of the link */
      const linkTag = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      console.log(linkTag);
      /* add generated code to html variable */
      tagList.insertAdjacentHTML('beforeend', linkTag);
      console.log(tagList)

    /* END LOOP: for each tag */
  }
    /* insert HTML of all the links into the tags wrapper */
  /* END LOOP: for every article: */
  }
}

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log(clickedElement + 'was clicked!');
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log(href)
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
  const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log(tagLinks)
  /* START LOOP: for each active tag link */
  for (let link of tagLinks) {
    /* remove class active */
    link.classLIst.remove('active');
    console.log(link +'removed!')

  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const allTagLinks = document.querySelectorAll('a[href="' + href + '"]');
  console.log(allTagLinks);
  /* START LOOP: for each found tag link */
  for (let allTagLink of allTagLinks){
    /* add class active */
    allTagLink.classList.add('active');
  /* END LOOP: for each found tag link */
}
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
const linkOfTags = document.querySelectorAll('[href^="#tag-"]')
  /* START LOOP: for each link */
  for(let linkOfTag of linkOfTags){
    /* add tagClickHandler as event listener for that link */
    linkOfTag.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
  }
}

addClickListenersToTags();

function generateAuthors(){
  /* Find all articles*/
  const allArticles = document.querySelectorAll(optArticleSelector);

  /* LOOP */
  for (let allArticle of allArticles) {
    const articleAuthor = allArticle.getAttribute('data-author');
    console.log(articleAuthor);

    /* Author Wrapper */
    const authorList = allArticle.querySelector(optArticleAuthorSelector);
    console.log(authorList);

    /* HTML variable */
    let innerHTML ='';

    /* Author from data-author attribute */
    const articleAuth = allArticle.getAttribute('data-author');
    console.log(articleAuth);
    /* Link */
    const linkAuthor = '<a href=#author-' + articleAuth + '">' + articleAuth + '</a>';
    console.log(linkAuthor);

    /* Insert link */

    authorList.insertAdjacentHTML('afterend', linkAuthor);
  }
}

generateAuthors();

function authorClickHandler (event){
  event.preventDefault();
  const clickedElement = this;

  /* Clicked element and add value of this */
  const authorHref = clickedElement.getAttribute('href');
  console.log(authorHref);

  /* Getting just name from authorHref */
  const author = authorHref.replace('#author-', '');
  console.log(author);

  /* Find all author links */
  const authorLinks = document.querySelectorAll('a.active[href^="#author-"]');
  console.log(authorLinks);

  /* Loop over active author links */
  for (let authorLink of authorLinks){
    authorLink.classList.remove('active');
  }

  /* find all authors with "href" where href = href const */
  const allAuthors = document.querySelectorAll('a[href="' + authorHref + '"]');
  console.log(allAuthors);

  /*Loop */
  for (let allAuthor of allAuthors) {
    allAuthor.classList.add('active');
    console.log(allAuthor);
  }
  generateTitleLinks('[data-author="' + author + '"]')
}


function addClickListenersToAuthors(){
  //Find All links to Authors
  const linksOfAuthors = document.querySelectorAll('[href^="#author-"]');
  //Loop over authors
  for (let linkOfAuthor of linksOfAuthors){
    linkOfAuthor.addEventListener('click', authorClickHandler)
  }

}

addClickListenersToAuthors();
