import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import llm_data from "../../Assets/Projects/llm_dataset.png";
import twitter_data from "../../Assets/Projects/twitter_data.png";
import outlier_metric from "../../Assets/Projects/average_metric_graphs.png";
import loan_project from "../../Assets/Projects/loan_project.png";
import e_commerce from "../../Assets/Projects/e_commerce.jpg";
import customs from "../../Assets/Projects/customs.png";
import perf_app from "../../Assets/Projects/application-performance.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are some selected projects I've worked on.
        </p>
        <Row className="justify-content-center">
          {/* Using a single Row to wrap all the ProjectCard components */}
          <Col xs={12} sm={12} md={12} className="project-card">
            <ProjectCard
              imgPath={customs}
              isBlog={false}
              title="Customs Declaration Application"
              description="This is a web application that allows to make import or export declarations to the UK's HMRC."
              ghLink=""
              demoLink="https://customs-uk.vercel.app/signup"
            />
          </Col>

          <Col xs={12} sm={12} md={12} className="project-card">
            <ProjectCard
              imgPath={perf_app}
              isBlog={false}
              title="Performance Application"
              description="The performance application is built for a client in Ghana. It allows to assign tasks/goals for departments."
              ghLink=""
              demoLink="https://performance-app-nextjs-v001.vercel.app/"
            />
          </Col>

          <Col xs={12} sm={12} md={12} className="project-card">
            <ProjectCard
              imgPath={llm_data}
              isBlog={false}
              title="LLM Dataset Construction"
              description="I worked on over 1000 responses to refine LLM responses."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col xs={12} sm={12} md={12} className="project-card">
            <ProjectCard
              imgPath={outlier_metric}
              isBlog={false}
              title="Examing outlier behaviour in recommender systems"
              description="A research project examining outliers in recommender systems."
              ghLink="https://github.com/Edkofifi/Recom-Systems"
              demoLink=""
            />
          </Col>
          <Col xs={12} sm={12} md={12} className="project-card">
            <ProjectCard
              imgPath={e_commerce}
              isBlog={false}
              title="Course Project"
              description="This is a mini course project submitted within the semester. It assesses key skills in databse design, backend development in C#.  "
              ghLink="https://github.com/Edkofifi/shoprite/tree/base"
              demoLink="https://youtu.be/uJhhBX6ZJ0s"
            />
          </Col>

          <Col xs={12} sm={12} md={12} className="project-card">
            <ProjectCard
              imgPath={loan_project}
              isBlog={false}
              title="Loan Analysis Project"
              description="Investigated variables impacting loan defaults."
              ghLink="https://github.com/Edkofifi/Project_Loans"
              demoLink=""
            />
          </Col>

          <Col xs={12} sm={12} md={12} className="project-card">
            <ProjectCard
              imgPath={twitter_data}
              isBlog={false}
              title="Twitter Data Mining Project"
              description="Mined twitter data for analysis on Ghana's president."
              ghLink="https://github.com/Edkofifi/Opinion-assessment-about-President-Akuffo-Addo"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
