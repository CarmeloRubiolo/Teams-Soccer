import "./Footer.css"

const Footer = () => {
    return (
        <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. <i>Error totam laborum</i> id consectetur esse recusandae, ratione magni, in omnis sit aliquam fugit pariatur ipsum consequuntur? Rem consequatur ipsum debitis enim? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis ullam magni sunt rerum fugiat beatae facere, sit dicta voluptatum atque! Nisi voluptatibus nobis laborum reiciendis maxime, cumque quod ad.</p>
          </div>

          <div class="col">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div class="col">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by Melo Rubiolo.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><div class="facebook" href="#"><i class="fa fa-facebook"></i></div></li>
              <li><div class="twitter" href="#"><i class="fa fa-twitter"></i></div></li>
              <li><div class="dribbble" href="#"><i class="fa fa-dribbble"></i></div></li>
              <li><div class="linkedin" href="#"><i class="fa fa-linkedin"></i></div></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    )
}

export default Footer