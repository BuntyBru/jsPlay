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


