const express = require('express')
const path = require('path')
const homeroute = require('./routes/home.route')
const app = express();

app.use(express.static(path.join(__dirname,'assets')))
app.use(express.static(path.join(__dirname,'images')))
app.set('view engine','ejs')
app.set('views','views')

app.use('/',homeroute)

app.listen(3000,()=>{
    console.log(' server listen on port 3000 ')
})


/* <% for(let product of products) { %>
      
     <div class="col col-12 col-md-6 col-lg-4 col-xl-3">

      <div class="card" style="width: 18rem;">
        <img src="<%= product.image%>" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">
            <a href="/product/<%= product._id %>"><%= product.name %></a>
            <p>Price: <%=product.price%> $</p>
          </h5>
          <form action="/cart" method="POST">
            <input type="number" name="amount" class="form-control">
            <input type="submet" value="add to cad" class="btn btn-primary">
          </form>
        </div>
      </div>
  </div>

     </div>
      
      <% } %> */