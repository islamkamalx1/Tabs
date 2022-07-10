document.body.innerHTML = `<section>
<div class="title">
  <h2>about</h2>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur mollitia consectetur quod veritatis beatae accusamus fugiat temporibus ipsa harum delectus.</p>
</div>
<div class="about-center section-center">
  <article class="about-img">
    <img src="./hero-bcg.jpeg" alt="about photo">
  </article>
  <article class="about">
    <div class="btn-container">
      <button class="tab-btn active" data-id="history">history</button>
      <button class="tab-btn" data-id="vision">vision</button>
      <button class="tab-btn" data-id="goals">goals</button>
    </div>
    <article class="about-content">
      <div class="content active" id="history">
        <h4>history</h4>
        <p>
          I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice
          pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean
          shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small
          batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral
          direct trade hoodie ugh chambray, craft beer pork belly flannel tacos
          single-origin coffee art party migas plaid pop-up.
        </p>
      </div>
      <div class="content" id="vision">
        <h4>vision</h4>
        <p>
          Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal
          deep v hella biodiesel. Church-key listicle polaroid put a bird on it
          chillwave palo santo enamel pin, tattooed meggings franzen la croix cray.
          Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu
          mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof
          party hammock master cleanse pop-up truffaut, bicycle rights skateboard
          affogato readymade sustainable deep v live-edge schlitz narwhal.
        </p>
        <ul>
          <li>list item</li>
          <li>list item</li>
          <li>list item</li>
        </ul>
      </div>
      <div class="content" id="goals">
        <h4>goals</h4>
        <p>
          Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four
          dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred
          fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel
          sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid
          cold-pressed roof party. Small batch adaptogen coloring book heirloom.
          Letterpress food truck hammock literally hell of wolf beard adaptogen everyday
          carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa
          chicharrones.
        </p>
      </div>
    </article>
  </article>
</div>
</section>`;

const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles =  document.querySelectorAll(".content");

about.addEventListener("click",(e)=>{
    const id =  e.target.dataset.id;
    console.log(id);
    if (id) {
        btns.forEach(btn => {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        articles.forEach((article)=>{
            article.classList.remove("active");
            const element = document.getElementById(id);
            element.classList.add("active")
        });
    }
});