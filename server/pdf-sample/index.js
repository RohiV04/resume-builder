module.exports = ({
  name,
  email,
  phone,
  linkedin,
  github,
  skills,
  experience,
  education,
  project,
  languages,
  hobbies,
}) => {
  return `
    <!doctype html>
    <html>
      <head>
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
        <!-- Bootstrap core CSS -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
        <!-- Material Design Bootstrap -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">

        <style>
          html{
            zoom: 0.55;
          }    
          .rule{
            border-bottom: 1px solid black;
            width:80%;
          }
          .mobile{
            margin-top:-10px;
          }
          .email{
            margin-bottom: 0;    
          }
          body{
            font-family: 'Garamond';
          }
        </style>
      </head>
      <body>
        <div class="col-lg-8 mx-auto">
          <br/><br/>
          <div class="row text-center">
            <div class="col-lg-6">
              <h1><b>${name}</b></h1>
              <p class="lead email"><strong>Email:</strong> ${email}</p>
              <p class="lead"><strong>Contact:</strong> (+92)${phone}</p>
              <p class="lead"><strong>LinkedIn:</strong> ${linkedin}</p>
              <p class="lead"><strong>Github:</strong> ${github}</p>
            </div>    
          </div>
        
          <hr/>
          <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Skills</b></h3>
          </div>
          <div class="col-lg-8 row mx-auto">
            <p class="lead"> ${skills}</p>
          </div> 

          <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Experience</b></h3>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="lead"><b>${experience[0].exp1_org}, ${experience[0].exp1_pos}</b> (${experience[0].exp1_dur})</p>
            <p class="mt-0">${experience[0].exp1_desc}</p>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="lead"><b>${experience[1].exp2_org}, ${experience[1].exp2_pos}</b> (${experience[1].exp2_dur})</p>
            <p class="mt-0">${experience[1].exp2_desc}</p>
          </div>

          <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Projects</b></h3>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="lead"><b>${project[0].proj1_title}</b> (${project[0].proj1_link})</p>
            <p class="mt-0">${project[0].proj1_desc}</p>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="lead"><b>${project[1].proj2_title}</b> (${project[1].proj2_link})</p>
            <p class="mt-0">${project[1].proj2_desc}</p>
          </div>

          <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Education</b></h3>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="lead"><b>${education[0].edu1_school}</b> (${education[0].edu1_qualification}, ${education[0].edu1_year})</p>
            <p class="mt-0">${education[0].edu1_score}</p>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="lead"><b>${education[1].edu2_school}</b> (${education[1].edu2_qualification}, ${education[1].edu2_year})</p>
            <p class="mt-0">${education[1].edu2_score}</p>
          </div>

          <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Extra-Curriculars/Activities</b></h3>
          </div>
          <div class="col-lg-8 mx-auto">
            <ul>
              <li><p class="lead"><b>Languages: </b>${languages} </p></li>
              <li><p class="lead"><b>Hobbies: </b>${hobbies} </p></li>
            </ul>
          </div>
          
          <!-- JQuery -->
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <!-- Bootstrap tooltips -->
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
          <!-- Bootstrap core JavaScript -->
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
          <!-- MDB core JavaScript -->
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
        </div>
      </body>
    </html> 
  `;
};
