
class Click_Add {
  //search field 每按一次就产生一次查询
  //获取所有当前metafields 用get_post_custom ， 转化成js ？ 
  //ajax发送请求
  //script本地化 传输id 到这里， url 变成 加 id 单独的， 然后获取当前页面所有信息 
  //已经通过自定义的rest route获取到当前id帖子下的所有fields 
  //js search 要解决的问题是 does the title contains the search string 
  //JS search解决思路 先获取到完整的list 然后 匹配domainObject.title.includes(searchString) || domainObject.link.includes(searchString); list中的title和link匹配搜索bara里面的string就跳出来结果
  //DISPLLAAY THE HTML
  constructor($) {

    this.domainList = [];
    this.searchField = jQuery("#searchItem");
    this.allDomains = [];
    this.counter = 0;
    this.totalDomains = [];
    this.resultsDiv = jQuery("#tie-domain-items");
    this.previousValue;
    this.url = custom_data.root_url+ '/wp-json/wb/v1/domains/' +custom_data.id;
    // $.ajax({
    //   url:"https://method.top/wp-json/wb/v1/domains/"+custom_data.id,
    //   success:(response) => {
    //     //response返回的是json 要用json parse
    //    //console.log(response.custom_domain[0]);
    //    var dataDomain = response.custom_domain[0];

    //    Object.entries(dataDomain).forEach((result) => {
        
    //     this.allDomains[this.counter] = result[1];
    //     this.counter++;
    //    });

    //    //return this.allDomains;
    // }});
     //this.displayItem(this.allDomains);
    this.events();
     }

  events($) {
    jQuery(document).on('click','#upload_add_slide',this.createFiled.bind(this));
    this.searchField.on('keyup', this.typingLogic.bind(this));
  }



   getResults() {
      jQuery.getJSON(this.url,(result) => {
        const domain = result.custom_domain[0];
        //把nestted object 转换成array 
        Object.entries(domain).forEach((item) => {
          this.allDomains[this.counter] = item[1];
          this.counter++; 
        });
        console.log(this.allDomains);
        
        
      });

    }

    typingLogic(e) {
  

    /**
     * const searchString = e.target.value.toLowerCase();
     * 把string 变成 input的val( ) 就好了 就可以不用多次执行 
     */
    //toLowercase( ) 实现把结果变成小写 

    //搜索输入的string大小写结果切换实现均可搜索到
    //if search string is H -> h
    //if searchstring is h -> H
    //convert title to lowercase and compare
    //convert link to lowercase and compare 
    

    const filteredDomain = this.allDomains.filter(domainObject => {
      return domainObject.title.toLowerCase().includes(this.searchField.val()) || domainObject.link.toLowerCase().includes(this.searchField.val());
    });

    console.log(filteredDomain);

    this.displayItem(filteredDomain);
  }
 
  createFiled(e) {
    e.preventDefault();
    // 先创建空白form，添加到ul#tie-domain-items最前面
    // 通过input.submit来写入meta field
    this.resultsDiv.prepend(`
      <li style="background:#00ff00" id="listItem_${nextCell}" class="ui-state-default"><div class="widget-content option-item">
        <label for="">
          <span>序号:</span>
          <input id="custom_domain[${nextCell}][number]" name="custom_domain[${nextCell}][number]" value="${nextCell}" type="number">
        </label>
        <label for="custom_domain[${nextCell}][title]">
          <span>域名标题:</span><input id="custom_domain[${nextCell}][title]" name="custom_domain[${nextCell}][title]" value="" type="text" />
        </label>
        <label for="custom_domain[${nextCell}][link]">
          <span>域名链接:</span>
        <input id="custom_domain[${nextCell}][link]" name="custom_domain[${nextCell}][link]" value="" type="text" />
        </label>
        <label for="custom_domain[${nextCell}][price]">
          <span>域名价格:</span>
        <input id="custom_domain[${nextCell}][price]" name="custom_domain[${nextCell}][price]" value="" type="text" />
        </label>
        <label for="custom_domain[${nextCell}][caption]">
          <span class="slide-caption">域名介绍:</span>
          <textarea name="custom_domain[${nextCell}][caption]" id="custom_domain[${nextCell}][caption]"></textarea>
        </label>
        <input id="custom_domain[${nextCell}][id]" name="custom_domain[${nextCell}][id]" value="" type="hidden" />
        <a class="del-cat"></a></div>
      </li>
      <input type="submit" id="submit" name="submit" class="button button-primary" value="Save Changes">`);
    nextCell++;}

    //display the search result 
    displayItem(listItem) { //menuItem is menu . 
      //recive the json : id,title,slug.custom_domain:{title,link,price,caption,id}
      //给每个字段添加id 跟序号一致
      //custom domain[2][title] = baidu.com   custom_domain[3][link] = scene.cc 2要跟百度对应3要跟scene.cc对应
      //每按一次新增就是增加一个数字大小 
      //searchString 每按一次就产生一次查询
      
      const displayList = listItem.map((item) => {
        return `
        <li style="background:#00ff00" id="listItem_${item.number}" class="ui-state-default"><div class="widget-content option-item">
        <label for="">
          <span>序号:</span>
          <input id="custom_domain[${item.number}][number]" name="custom_domain[${item.number}][number]" value="${item.number}" type="number">
        </label>
        <label for="custom_domain[${item.number}][title]">
          <span>域名标题:</span><input id="custom_domain[${item.number}][title]" name="custom_domain[${item.number}][title]" value="${item.title}" type="text" />
        </label>
        <label for="custom_domain[${item.number}][link]">
          <span>域名链接:</span>
        <input id="custom_domain[${item.number}][link]" name="custom_domain[${item.number}][link]" value="${item.link}" type="text" />
        </label>
        <label for="custom_domain[${item.number}][price]">
          <span>域名价格:</span>
        <input id="custom_domain[${item.number}][price]" name="custom_domain[${item.number}][price]" value="${item.price}" type="text" />
        </label>
        <label for="custom_domain[${item.number}][caption]">
          <span class="slide-caption">域名介绍:</span>
          <textarea name="custom_domain[${item.number}][caption]" id="custom_domain[${item.number}][caption]">${item.caption}</textarea>
        </label>
        <input id="custom_domain[${item.number}][id]" name="custom_domain[${item.number}][id]" value="" type="hidden" />
        <a class="del-cat"></a></div>
        
      </li>
      <input type="submit" id="submit" name="submit" class="button button-primary" value="Save Changes">`;
      }).join('');

      jQuery(displayList).prependTo(this.resultsDiv);
      
    }
}

jQuery(document).ready(function($) {
  new Click_Add($);
});
