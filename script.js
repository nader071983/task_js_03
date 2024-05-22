add_btn_id.onclick=add_bookmark;
reset_btn_id.onclick=reset_bookmark;


var bookmark_vr =document.getElementById('bookmark_id')
var siteurl_vr =document.getElementById('siteurl_id')
var bookmark_list ;

if(localStorage.getItem( 'bookmark')!==null){
    bookmark_list=JSON.parse( localStorage.getItem( 'bookmark'))
    display_bookmark( )
}
    else{bookmark_list=[]

    }
function add_bookmark( ){
    var bookmark={
        bookmark:bookmark_vr.value,
        site_url:siteurl_vr.value
    }
    if(document.getElementById('add_btn_id').innerHTML==='<i class="fa-solid fa-plus"></i> SUBMIT'){
        bookmark_list.push(bookmark)
    }
    else {
        bookmark_list.splice(current_index ,1,bookmark)
        document.getElementById('add_btn_id').innerHTML='<i class="fa-solid fa-plus"></i> SUBMIT'
    }
    localStorage.setItem('bookmark',JSON.stringify(bookmark_list))
    display_bookmark()
    reset_bookmark( )
    console.log(bookmark_list)
}
function display_bookmark( ){
    var bookmark_box = ``;
    for ( var i=0 ; i<bookmark_list.length ;i++){
        bookmark_box+= `
        <div class="rslt">
        <h5 class="h5nd m-0">${bookmark_list[i].bookmark}</h5>
        <h5 class="h5nd m-0">${bookmark_list[i].site_url}</h5>

        <button type="button" class="btn btn-primary" onclick="update_bookmark(${i})">
          <i class="fa-solid fa-pen-to-square"></i> update </button>

        <button type="button" class="btn btn-success " onclick="visit" id="visit_btn_id">
          <i class="fa-solid fa-eye"></i> VISIT</button>

        <button type="button" class="btn btn-danger " onclick="delete_bookmark(${i})">
          <i class="fa-solid fa-trash-can"></i> DELETE </button>
          </div>
        `
    }
    
document.getElementById('bookmark_result_id').innerHTML=bookmark_box 
}
function reset_bookmark( ){
    bookmark_vr.value=null
    siteurl_vr.value=null
}
function delete_bookmark( index){
    bookmark_list.splice( index , 1)
    display_bookmark( )
    localStorage.setItem('bookmark',JSON.stringify( bookmark_list))
}
var current_index ;
function update_bookmark(index){
    current_index=index
    bookmark_vr.value=bookmark_list[index].bookmark
    siteurl_vr.value=bookmark_list[index].site_url
    document.getElementById('add_btn_id').innerHTML='<i class="fa-solid fa-pen-to-square"></i> UPDATE'
}

// function visit(){document.getElementById('visit_btn_id')}

// for ( var x=0 ; x<bookmark_list.length ;x++){ }

// <h5 class="h5nd m-0">${bookmark_list[x].site_index}</h5>

    // function add_value( ){ if( bookmark_vr.value.length<0 || siteurl_vr.value.length<0){ alert('add')}}

// add_btn_id.onclick=add_value;
