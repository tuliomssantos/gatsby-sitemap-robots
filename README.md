# Gatsby Sitemap and Robots.txt

## Livedemo

### Sitemap
http://gatsby-sitemap-robots.s3-website-sa-east-1.amazonaws.com/sitemap.xml

### Robots
http://gatsby-sitemap-robots.s3-website-sa-east-1.amazonaws.com/robots.txt

---

##  Contact
tuliomssantos@gmail.com

https://www.linkedin.com/in/tulio-santos-b04958172/

---
* Add sitemap plugin to your Gatsby Project

```sh
  yarn add gatsby-plugin-sitemap
```

- Add stieUrl to siteMetadata in gatsby-config file.
- Sitemap only it's generated in production mode

```sh
  gatsby build
  gatsby serve
```

- To see your sitemap visit:
- http://localhost:9000/sitemap.xml

## Add Robots.txt

```sh
  yarn add gatsby-plugin-robots-txt
```

Then run:

```sh
  gatsby build
  gatsby serve
```

- To see your robots.txt visit:
- http://localhost:9000/robots.txt

## Customize sitemap

- Add ***last modify date*** 
- If you consume data from a Headless CMS probabily he adds a lastmodify date prop
- In your gatsby-config pass the lastmoddate to context of your pages
- Then update the config of your gatsby-plugin-sitemap

```js
{
    resolve: `gatsby-plugin-sitemap`,
    options: {
    query: `
        {
        site {
            siteMetadata {
            siteUrl
            }
        }
        allSitePage {
            edges {
            node {
                path
                context {
                lastmoddate
                }
            }
            }
        }
    }`,
    serialize: ({ site, allSitePage }) =>
        allSitePage.edges.map(edge => {
        return {
            url: site.siteMetadata.siteUrl + edge.node.path,
            lastmod: edge.node.context.lastmoddate
            ? edge.node.context.lastmoddate.substring(0, 10)
            : null,
        }
        }),
    },
}
```
