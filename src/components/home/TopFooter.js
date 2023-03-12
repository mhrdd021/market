import React from "react";

//Styles
import styles from "./TopFooter.css";



const TopFooter = () => {
  return (
    <div class="footer">
            <div class="container">     
                <div class="row sm:flex">                       
                    <div class="lg:w-4/12 sm:w-4/12 xs:w-full">
                        <div class="single_footer">
                            <h4>فروشگاه</h4>
                            <p className="font-thin" style={{color:"#fff"}}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده.
                            </p>
                        </div>
                    </div> 
                    <div class="md:w-4/12 sm:w-4/12 xs:w-full sm:text-center">
                        <div class="single_footer single_footer_address">
                            <h5 className="topic">لینک‌های  پرکاربرد</h5>
                            <ul>
                                <li><a href="#">صفحه اصلی</a></li>
                                <li><a href="#">مردانه</a></li>
                                <li><a href="#">زنانه</a></li>
                                <li><a href="#">تخفیف‌دار</a></li>
                                <li><a href="#">جدیدترین</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:w-4/12 sm:w-4/12 xs:w-full">
                        <div class="single_footer single_footer_address">
                            <h5 className="topic">ثبت‌نام کنید</h5>
                            <div class="signup_form">                           
                                <form action="#" class="subscribe">
                                    <button type="button" class="subscribe__btn"><i class="fas fa-paper-plane"></i></button>
                                    <input type="text" class="subscribe__input" placeholder="آدرس ایمیل"></input>
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
                        <p class="copyright">Copyright © 2019 <a href="#">MHRDD</a>.</p>
                    </div>                
                </div>                
            </div>
        </div>
  );
};

export default TopFooter;
