# Notion-blog-nextjs

A template to start your own blog. This template use Notion as CMS.

## Live example
I've created my blog with this repository, you can check it: <br />
URL: [9gustin.com](https://www.9gustin.com) <br />
Repo: [@9gustin/personal-blog](https://github.com/9gustin/personal-blog)
## Usage

#### 1. Create repo
In the head of repo(in github) you can use the "Use this template", that option creates you a repo with this repo data, it's like a fork. Also you can go to this direction: [Use this template](https://github.com/9gustin/notion-blog-nextjs/generate).

After that you will have the repository an go to edit that.

#### 2. Put your data
Now you have to fill it with your information, like name, theme, title of page, can edit that in Github or can clone it, it's not much information to edit.

You have to edit one file(in your repo), [/config/user.ts](https://github.com/9gustin/notion-blog-nextjs/blob/main/config/user.ts).
In there you have to customize the fields: <br />

* **title** and **description**: this are visual and are showed in header of pages, the type of both are ReactNode to use links, bold or that you want. <br />
* **theme**: here you can choose one of available themes, listed in User type declaration. ('react' | 'angular' | 'vue' | 'js' | 'svelte' | null). Put null if you want to use default theme.<br />
 * **mainTitle** and **pageTitle**: For last, that field are for HTML Head title, in home are showed "mainTitle+pageTitle" and in article view are showed "articleName+pageTitle"

#### 3. Create notion database
After that you have to create a notion database, i recommend table, but feel free to choose any in the **database** section:
![image](https://user-images.githubusercontent.com/38046239/125204014-7ea67a80-e251-11eb-9d42-80c9bea13330.png) <br />
In this database we put our articles, like that
![image](https://user-images.githubusercontent.com/38046239/125204047-a564b100-e251-11eb-94f6-4888bbe4dae6.png) <br />

#### 4. Create notion integration
You have to create a Notion integration, this blog use the Notion API. Go to [Notion/my-integrations](https://www.notion.so/my-integrations), and create a new one pointing to your workspace.
After you created you can get the integration token, save that to deploy or run the project.

**IMPORTANT: Permissions** <br />
Check this part of Notion API documentation, you have to share database with your integration. And that explain how to get my database id.

#### 5. Run / Deploy

For last, create a .env file like this [example](https://github.com/9gustin/notion-blog-nextjs/blob/main/.env.example) and add your database id and your integration token. And now you can run the project like any Next project, npm run dev(with previous npm install).
The same to deploy, take in count the env variables.

