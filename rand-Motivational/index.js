const motArray = {
    'Oscar Wilde': 'To live is the rarest thing in the world. Most people exist, that is all',
    'Emily Dickinson':'That it will never come again is what makes life so sweet.', 
  'George Eliot':'It is never too late to be what you might have been.',  
  'Haruki Murakami':'Pain is inevitable. Suffering is optional.',  
  'William Shakespeare':'All the world\'s a stage, and all the men and women merely players.',
  'Plato':'Be kind, for everyone you meet is fighting a hard battle.' ,
  'Emily Dickinson':'Unable are the loved to die for love is immortality.', 
  'Sylvia Plath':'Let me live, love, and say it well in good sentences.' , 
  'Ernest Hemingway':'We are all broken, that\'s how the light gets in.',  
  'Voltaire':'Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.',  
  'Stephanie Bennett Henry':'Life is tough my darling, but so are you.',  
  'Brene Brown':'Self-awareness and self-love matter. Who we are is how we lead.',  
  'Stephen King':'Amateurs sit and wait for inspiration, the rest of us just get up and go to work.'
  }
  let author= Object.keys(motArray);
  let quote = Object.values(motArray);
  const quoteId= document.getElementById('text');
  const authId =document. getElementById('author')
  const btn = document.getElementById('new-quote');
  function random_item(items)
  {
    
  return items[Math.floor(Math.random()*items.length)];
       
  }
  btn.addEventListener('click', function changeQuoteAndAuthor(){
    quoteId.textContent =   random_item(quote)
    authId.textContent = random_item(author)
    
  })