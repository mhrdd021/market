import React from "react";

//Styles
import styles from "./TopFooter.css";

//Images
import 'bootstrap/dist/css/bootstrap.min.css'

const TopFooter = () => {
  return (
    <div class="footer">
            <div class="container">     
                <div class="row">                       
                    <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="single_footer">
                            <h4>فروشگاه</h4>
                            <p className="text-blue-600">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده.
                            </p>
                        </div>
                    </div> 
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single_footer single_footer_address">
                            <h4>Page Link</h4>
                            <ul>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Simply dummy text</a></li>
                                <li><a href="#">The printing and typesetting </a></li>
                                <li><a href="#">Standard dummy text</a></li>
                                <li><a href="#">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <div class="single_footer single_footer_address">
                            <h4>Subscribe today</h4>
                            <div class="signup_form">                           
                                <form action="#" class="subscribe">
                                    <input type="text" class="subscribe__input" placeholder="Enter Email Address"></input>
                                    <button type="button" class="subscribe__btn"><i class="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="social_profile">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>                          
                    </div>        
                </div>
                <div class="row">
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                        <p class="copyright">Copyright © 2019 <a href="#">Akdesign</a>.</p>
                    </div>                
                </div>                
            </div>
        </div>
  );
};

export default TopFooter;
