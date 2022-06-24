import{_ as n,r as d,o,c as h,a as e,b as i,F as c,e as t,d as a}from"./app.81142736.js";const s={},p=t(`<h1 id="sql" tabindex="-1"><a class="header-anchor" href="#sql" aria-hidden="true">#</a> SQL</h1><p>[toc]</p><h2 id="\u53BB\u91CD-\u4E24\u79CD\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u53BB\u91CD-\u4E24\u79CD\u5199\u6CD5" aria-hidden="true">#</a> \u53BB\u91CD\uFF0C\u4E24\u79CD\u5199\u6CD5</h2><pre><code>where word=\u2018apple\u2019
where word like \u2018%apple%&#39;
</code></pre><h2 id="\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#\u8303\u56F4" aria-hidden="true">#</a> \u8303\u56F4</h2><pre><code>where age between 20 and 23
</code></pre><h2 id="\u6392\u9664" tabindex="-1"><a class="header-anchor" href="#\u6392\u9664" aria-hidden="true">#</a> \u6392\u9664</h2><pre><code>WHERE university NOT IN (&#39;\u590D\u65E6\u5927\u5B66\u2019)
</code></pre><h2 id="\u80AF\u5B9A\u5426\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u80AF\u5B9A\u5426\u5B9A" aria-hidden="true">#</a> \u80AF\u5B9A\u5426\u5B9A</h2><pre><code>WHERE age IS NOT NULL
</code></pre><h2 id="\u903B\u8F91\u8FD0\u7B97-and-or" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91\u8FD0\u7B97-and-or" aria-hidden="true">#</a> \u903B\u8F91\u8FD0\u7B97 AND OR</h2><pre><code>WHERE gender = &#39;male&#39; AND gpa &gt; 3.5
</code></pre><h2 id="some-\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#some-\u5224\u65AD" aria-hidden="true">#</a> some \u5224\u65AD</h2><pre><code>where university in (&#39;\u5317\u4EAC\u5927\u5B66&#39;, &#39;\u590D\u65E6\u5927\u5B66&#39;, &#39;\u5C71\u4E1C\u5927\u5B66\u2019)
</code></pre><h2 id="\u64CD\u4F5C\u7B26\u6DF7\u7528" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u7B26\u6DF7\u7528" aria-hidden="true">#</a> \u64CD\u4F5C\u7B26\u6DF7\u7528</h2><pre><code>where
  university = &#39;\u5C71\u4E1C\u5927\u5B66&#39;
  and gpa &gt; 3.5
  or university = &#39;\u590D\u65E6\u5927\u5B66&#39;
  and gpa &gt; 3.8
</code></pre><h2 id="\u5B57\u7B26\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u5339\u914D" aria-hidden="true">#</a> \u5B57\u7B26\u5339\u914D</h2><p>\u4E00\u822C\u5F62\u5F0F\u4E3A\uFF1A \u5217\u540D [NOT ] LIKE \u5339\u914D\u4E32\u4E2D\u53EF\u5305\u542B\u5982\u4E0B\u56DB\u79CD\u901A\u914D\u7B26\uFF1A</p><pre><code>_\uFF1A\u5339\u914D\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26\uFF1B

%\uFF1A\u5339\u914D0\u4E2A\u6216\u591A\u4E2A\u5B57\u7B26\uFF1B

[ ]\uFF1A\u5339\u914D[ ]\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26(\u82E5\u8981\u6BD4\u8F83\u7684\u5B57\u7B26\u662F\u8FDE\u7EED\u7684\uFF0C\u5219\u53EF\u4EE5\u7528\u8FDE\u5B57\u7B26\u201C-\u201D\u8868 \u8FBE )\uFF1B

[^ ]\uFF1A\u4E0D\u5339\u914D[ ]\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26\u3002
</code></pre><h2 id="\u6C42\u6700\u5927\u503C" tabindex="-1"><a class="header-anchor" href="#\u6C42\u6700\u5927\u503C" aria-hidden="true">#</a> \u6C42\u6700\u5927\u503C</h2><pre><code>select max(count)
</code></pre><h2 id="\u6392\u5E8F-\u53D61\u4E2A" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F-\u53D61\u4E2A" aria-hidden="true">#</a> \u6392\u5E8F\uFF0C\u53D61\u4E2A</h2><pre><code>order by count desc limit 1
</code></pre><h2 id="\u8BA1\u6570" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u6570" aria-hidden="true">#</a> \u8BA1\u6570</h2><pre><code>select count(gender)
</code></pre><h2 id="\u53D6\u5747\u503C" tabindex="-1"><a class="header-anchor" href="#\u53D6\u5747\u503C" aria-hidden="true">#</a> \u53D6\u5747\u503C</h2><p>\u4FDD\u7559 1 \u4F4D\u5C0F\u6570\uFF08\u6D6E\u70B9\u6570\uFF0C\u5C0F\u6570\u4F4D\u591A\uFF09</p><pre><code>round(avg(gpa), 1)
</code></pre><h2 id="\u5206\u7EC4-group-by" tabindex="-1"><a class="header-anchor" href="#\u5206\u7EC4-group-by" aria-hidden="true">#</a> \u5206\u7EC4 group by</h2><pre><code>select
    gender,university,
    count(device_id) as user_num,
    avg(active_days_within_30) as avg_active_day,
    avg(question_cnt) as avg_question_cnt
from user_profile
group by gender,university
</code></pre><h2 id="\u6309\u8BA1\u7B97\u6761\u4EF6\u53D6\u51FA" tabindex="-1"><a class="header-anchor" href="#\u6309\u8BA1\u7B97\u6761\u4EF6\u53D6\u51FA" aria-hidden="true">#</a> \u6309\u8BA1\u7B97\u6761\u4EF6\u53D6\u51FA</h2><p>where \u4E0D\u652F\u6301</p><pre><code>having avg_question_cnt&lt;5 or avg_answer_cnt&lt;20
</code></pre><h2 id="\u5173\u8054\u8868" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u8868" aria-hidden="true">#</a> \u5173\u8054\u8868</h2><p>\u8868A inner join \u8868B on \u6761\u4EF6</p>`,35),l=a("join \u5206\u7C7B\uFF0Cleft \u8868\u793A\u5DE6\u8868\u5168\u90E8+\u5339\u914D "),_={href:"https://www.w3schools.com/sql/sql_join.asp",target:"_blank",rel:"noopener noreferrer"},u=a("SQL Joins"),f=e("p",null,"\u5173\u952E\u5B57\u53EF\u7528\u5927\u5199\u6216\u5C0F\u5199\uFF0C\u6709\u8BED\u6CD5\u9AD8\u4EAE\u65F6\uFF0C\u4E0D\u91CD\u8981\u3002\u5C3D\u91CF\u6362\u884C\uFF0C\u63D0\u5347\u53EF\u8BFB\u6027",-1),g=e("p",null,"\u7EC3\u4E60 https://www.nowcoder.com/exam/oj?tab=SQL%E7%AF%87&topicId=199&fromPut=pc_newmedia_zhihu_kol_rocky",-1);function b(x,m){const r=d("ExternalLinkIcon");return o(),h(c,null,[p,e("p",null,[l,e("a",_,[u,i(r)])]),f,g],64)}var w=n(s,[["render",b],["__file","sql.html.vue"]]);export{w as default};
