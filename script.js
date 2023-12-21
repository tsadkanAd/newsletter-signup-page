let btn = document.getElementById('button');
function validateInput(){
let field = document.getElementById('input');
let msg = document.getElementById('valid');
if(field.value==''){
	msg.style.visibility='visible';
	field.style.borderColor='red';
	field.value='ash#loremcompany.com';
	field.style.color='red';
	field.style.backgroundColor='pink';
}else{
	let parent = document.getElementById('main');
	let parent1 = document.getElementById('main-content');
	let parent2 = document.getElementById('main-image');
  let successHeader = document.createElement('h3');
  let successParagraph = document.createElement('p');
  let successButton = document.createElement('button');
  let successImage = document.createElement('img');
  successImage.src = 'assets/images/icon-list.svg';
  successImage.style.width = '50px';
  successImage.style.height = '50px';
  successHeader.innerHTML = 'Thanks for subscribing!';
  successHeader.style.width = '200px';
  successParagraph.innerHTML = `A confirmation message has been sent to <strong>${field.value}</strong>. Please open it and click the button inside to confirm your subscription.`;
  successParagraph.style.width = '350px';
  successParagraph.style.fontSize = '14px';
  successParagraph.style.color ='hsl(234, 29%, 20%)';
  successButton.innerHTML = 'Dismiss message';
  parent.removeChild(parent1);
  parent.removeChild(parent2);
  parent.style.height = '350px';
  parent.style.width = '350px';
  parent.style.padding = '50px';
  parent.style.display = 'flex';
  parent.style.flexDirection= 'column';
  parent.style.alignItems= 'center';
  parent.appendChild(successImage);
  parent.appendChild(successHeader);
  parent.appendChild(successParagraph);
  parent.appendChild(successButton);
}
}
btn.addEventListener("click", validateInput);