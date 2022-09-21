import "../styles/Test.css"
import $ from 'jquery';

$(document).ready(function(){
    $(".veen .rgstr-btn button").click(function(){
        $('.veen .wrapper').addClass('move');
        $('.body').css('background','#e0b722');
        $(".veen .login-btn button").removeClass('active');
        $(this).addClass('active');

    });
    $(".veen .login-btn button").click(function(){
        $('.veen .wrapper').removeClass('move');
        $('.body').css('background','#ff4931');
        $(".veen .rgstr-btn button").removeClass('active');
        $(this).addClass('active');
    });
});







export default function Test(){
    return(
        <>
        {/* <script  src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" ></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> */}
<div className="body">
		<div className="veen">
			<div className="login-btn splits">
				<p>Already an user?</p>
				<button className="active">Login</button>
			</div>
			<div className="rgstr-btn splits">
				<p>Don't have an account?</p>
				<button>Register</button>
			</div>
			<div className="wrapper">
				<form id="login" tabindex="500">
					<h3>Login</h3>
					<div className="mail">
						<input type="mail" name=""/>
						<label>Mail or Username</label>
					</div>
					<div className="passwd">
						<input type="password" name=""/>
						<label>Password</label>
					</div>
					<div className="submit">
						<button className="dark">Login</button>
					</div>
				</form>
				<form id="register" tabindex="502">
					<h3>Register</h3>
					<div className="name">
						<input type="text" name=""/>
						<label>Full Name</label>
					</div>
                    <div className="name">
						<input type="text" name=""/>
						<label>Full Name</label>
					</div>
                    <div className="name">
						<input type="text" name=""/>
						<label>Full Name</label>
					</div>
                    <div className="name">
						<input type="text" name=""/>
						<label>Full Name</label>
					</div>
					<div className="mail">
						<input type="mail" name=""/>
						<label>Mail</label>
					</div>
					<div className="uid">
						<input type="text" name=""/>
						<label>User Name</label>
					</div>
					<div className="passwd">
						<input type="password" name=""/>
						<label>Password</label>
					</div>
					<div className="submit">
						<button className="dark">Register</button>
					</div>
				</form>
			</div>
		</div>	
	</div>


	{/* <style type="text/css">
		.site-link{
      padding: 5px 15px;
			position: fixed;
			z-index: 99999;
			background: #fff;
			box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);
			right: 30px;
			bottom: 30px;
			border-radius: 10px;
		}
		.site-link img{
			width: 30px;
			height: 30px;
		}
	</style> */}
        </>
    );

    
}