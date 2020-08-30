document.addEventListener('DOMContentLoaded',() => {
	const list = document.querySelector('#book-list ul');

//deletion 
list.addEventListener('click',(e)=>{

	if(e.target.className == 'delete')
	{
		console.log("Delete",e.target.parentNode);
list.removeChild(e.target.parentNode)

	}
})


//forms adding books

const addForm = document.forms['add-book'];

addForm.addEventListener('submit',(e)=>{
	e.preventDefault();

	const val  = addForm.querySelector("input[type='text']").value;

	
	if(val.length>0)
	{
			const li = document.createElement('li');
	const bookName = document.createElement('span');
	bookName.textContent = val;
	bookName.classList.add('name');

	const delBtn =document.createElement('span');
	delBtn.textContent='delete';
	delBtn.classList.add('delete');


	li.appendChild(bookName);
	li.appendChild(delBtn);
	li.setAttribute('data-id',val)
	list.appendChild(li)
	addForm.querySelector("input[type='text']").value=''

	}

})


//search bar

const searchForm = document.forms['search-books'];
searchForm.addEventListener('keyup',(e)=>{
	const term = e.target.value.toLowerCase();

	let books  = document.querySelectorAll('li');
	Array.from(books).forEach( book => {
		const title = book.firstElementChild.textContent;
		if(title.toLowerCase().indexOf(term) !=-1)
		{
			book.style.display = 'block';

		}
		else
		{
			book.style.display = 'none';
		}
	})

})

//sorting books 

const sortBtn = document.querySelectorAll('header button')[0];
console.log(sortBtn);

sortBtn.addEventListener('click', ()=>{

	let books  = document.querySelectorAll('li');
	let items = document.querySelector('ul').childNodes;
	//console.log("==>",items)
	let itemArray=[];
	items.forEach( x => {
		if(x.nodeType == 1)
		{

			itemArray.push(x)
			console.log(x.querySelector('.name').innerHTML)
		}
	})

//sorting
	itemArray.sort(function(a, b) {
  return a.querySelector('.name').innerHTML == b.querySelector('.name').innerHTML
          ? 0
          : (a.querySelector('.name').innerHTML > b.querySelector('.name').innerHTML ? 1 : -1);
});

console.log(itemArray)
	for (i = 0; i < itemArray.length; ++i) {
  document.querySelector('ul').append(itemArray[i]);
}
})



})



