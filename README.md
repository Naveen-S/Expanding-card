# Expanding-card
Expanding card with transition!

### Things learnt in this mini project.

- width can be specified as flex. 

  flex: 0.5;

- background-position: center
  
    default is top.
    
- Media query: 
   Anything below this screen size will get these styles.
   
   ```
   @media(max-width: 480px) {
    .container {
      width: 100vw;
    }
    
    .panel:nth-last-of-type(1), .panel:nth-last-of-type(2) {
      display: none;
    }
  }
  
  
- Add and remove css classes via Javascript.
  
     ```js
     const container = document.querySelector('#root');
     container.classList.add('active);
     container.classList.remove('active);
     ```
