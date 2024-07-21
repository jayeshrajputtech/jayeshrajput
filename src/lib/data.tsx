import { Github, Twitter, Figma, Linkedin, Youtube } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoCypress from '/public/images/logos/icon-cypress.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import Ansible from '/public/images/logos/ansible-core.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import Docker from '/public/images/logos/docker.svg';
import Kubernetes from '/public/images/logos/kubernetes.svg';
import Terraform from '/public/images/logos/terraform.svg';
import Jenkins from '/public/images/logos/jenkins.svg';
import Linux from '/public/images/logos/linux.svg';
import AWS from '/public/images/logos/aws.svg';
import GCP from '/public/images/logos/gcp.svg';
import Azure from '/public/images/logos/azure.svg';
import ArgoCD from '/public/images/logos/argocd.svg';
import Python from '/public/images/logos/python.svg';
import GO from '/public/images/logos/go.svg';
import GitHub from '/public/images/logos/github-new.svg';
import Nginx from '/public/images/logos/nginx.svg';
import Grafana from '/public/images/logos/grafana.svg';
import Promotheus from '/public/images/logos/promotheus.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import LogoIgniteSolutions from '/public/images/logos/ignite-logo.png';
import LogoCelebalTechnologies from '/public/images/logos/celebal-logo-white.png';
import ProjectJavaDevSecOPs from '/public/images/DevSecOps-java-cicd-pipeline-project-blog-coverpage.gif';
import ProjectCICDAWS from '/public/images/Microservices-CICD-AWS-Made-with-Clipchamp-cropped.gif';
import ProjectCICDGitOps from '/public/images/Jenkins-GitOps-CICD.png';

import ProjectFiskil from '/public/images/project-fiskil.png';
import ProjectWingie from '/public/images/project-wingie.png';
import ProjectPepehousing from '/public/images/project-pepehousing.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  //TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/jayeshrajputtech',
  GITHUB_REPO: 'https://github.com/jayeshrajputtech/jayeshrajput',
  TWITTER: 'https://twitter.com/jayeshrajputt',
  LINKEDIN: 'https://linkedin.com/in/rajputjayesh/',
  YOUTUBE_CHANNEL: 'https://youtube.com/@TechWithJayeshR'
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Experience',
    href: '#experiences',
  },
  {
    label: 'Projects',
    href: '#work',
  },
  // {
  //   label: 'Testimonials',
  //   href: '#testimonials',
  // },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    url: 'https://linkedin.com/in/rajputjayesh',
  },
  {
    icon: Youtube,
    url: 'https://youtube.com/@TechWithJayeshR',
  },
  {
    icon: Github,
    url: 'https://github.com/jayeshrajputtech',
  },
  {
    icon: Twitter,
    url: 'https://twitter.com/jayeshrajputt',
  },
  // {
  //   icon: Figma,
  //   url: 'https://www.figma.com/@shahsagarm',
  // },

];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Terraform',
    logo: Terraform,
    url: 'https://www.hashicorp.com/products/terraform',
  },
  {
    label: 'Docker',
    logo: Docker,
    url: 'https://www.docker.com/',
  },
  {
    label: 'Kubernetes',
    logo: Kubernetes,
    url: 'https://kubernetes.io/',
  },
  {
    label: 'Jenkins',
    logo: Jenkins,
    url: 'https://www.jenkins.io/',
  },
  {
    label: 'Linux',
    logo: Linux,
    url: 'https://linux.org/',
  },
  {
    label: 'AWS',
    logo: AWS,
    darkModeLogo: AWS,
    url: 'https://aws.com/',
  },
  {
    label: 'Azure',
    logo: Azure,
    url: 'https://azure.com/',
  },
  {
    label: 'GCP',
    logo: GCP,
    darkModeLogo: GCP,
    url: 'https://cloud.google.com/',
  },
  {
    label: 'Nginx',
    logo: Nginx,
    url: 'https://nginx.org/',
  },
  {
    label: 'Grafana',
    logo: Grafana,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'ArgoCD',
    logo: ArgoCD,
    url: 'https://argoproj.github.io/',
  },
  {
    label: 'Python',
    logo: Python,
    url: 'https://python.org/',
  },
  {
    label: 'Go',
    logo: GO,
    url: 'https://go.dev/',
  },
  {
    label: 'Promotheus',
    logo: Promotheus,
    darkModeLogo: Promotheus,
    url: 'https://prometheus.io/',
  },
  {
    label: 'Ansible',
    logo: Ansible,
    url: 'https://www.ansible.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoIgniteSolutions,
    logoAlt: 'Ignite Solutions Logo',
    position: 'DevOps Engineering Intern',
    startDate: new Date(2024, 0),
    endDate: new Date(2024, 6),
    currentlyWorkHere: false,
    summary: [
      'I worked on the deployment of an internal onboarding application. I was tasked with deploying a monolith project on the AWS Lambda service. To achieve this, I containerized the application using Docker.',
      'Utilized the Zappa utility to deploy the project on AWS Lambda with integration to API Gateway, while hosting the database on Amazon RDS.',
      'I also played a significant role in a Generative AI project by advocating for and implementing a Blue/Green Deployment strategy for the frontend application.',
      'I designed an architecture for the deployment, which reduced deployment time from several minutes to a few seconds, significantly enhancing the user experience.',
    ],
  },
  {
    logo: LogoCelebalTechnologies,
    darkModeLogo: LogoCelebalTechnologies,
    logoAlt: 'Celebal Technologies logo',
    position: 'Cloud Infra & Security Intern',
    startDate: new Date(2023, 4),
    endDate: new Date(2023, 7),
    summary: [
      'During my internship at Celebal Technologies, I got hands-on experience working on several learning-based projects.',

      'I worked on designing the architecture of traditional three-tier web applications and implemented architectural designs using various key AWS services like Amazon EC2, Amazon VPC, and Amazon RDS. ',

      'I also worked on designing the event-driven web application architecture and implemented architectural designs using various key AWS serverless services like AWS Lambda, AWS API Gateway, and AWS DynamoDB.',

      'During my internship, I implemented various architecturally oriented solutions on public cloud platforms such as AWS.'
    ],
  },
  // {
  //   logo: LogoDotnpixel,
  //   darkModeLogo: LogoDotnpixelLight,
  //   logoAlt: 'Dotnpixel logo',
  //   position: 'Full Stack Developer',
  //   startDate: new Date(2015, 11),
  //   endDate: new Date(2017, 4),
  //   summary: ['Worked as a full stack developer (React / Laravel).'],
  // },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Implementing DevSecOps CI/CD for Java Web Application Deployment',
    description:
      'Implement a DevSecOps CI/CD pipeline using various tools that are used in the industry. DevSecOps, short for Development, Security, and Operations, is a methodology that integrates security practices within the DevOps process..',
    url: 'https://jayeshrajput.hashnode.dev/deploying-java-web-applications-with-a-devsecops-cicd-pipeline',
    previewImage: ProjectJavaDevSecOPs,
    technologies: [
      'Jenkins',
      'GitHub',
      'Maven',
      'SonarQube',
      'Nexus',
      'Docker',
      'Trivy',
      'Kubernetes',
    ],
  },
  {
    name: 'Building Microservices and CI/CD Pipelines on AWS',
    description:
      'Microservices are an architectural style that structures an application as a collection of small, autonomous services modelled around a business domain. CI/CD stands for Continuous Integration and Continuous Deployment (or Continuous Delivery). It is a set of practices and tools designed to improve the process of software development, integration, and deployment.',
    url: 'https://jayeshrajput.hashnode.dev/mastering-aws-building-microservices-and-cicd-pipelines-for-scalable-applications',
    previewImage: ProjectCICDAWS,
    technologies: [
      'AWS',
      'AWS CodeCommit',
      'AWS Cloud9',
      'AWS CodeDeploy',
      'CICD',
      'AWS CodePipeline',
    ],
  },
  {
    name: 'Jenkins and GitOps: The Complete Guide to DevSecOps CI/CD',
    description:
      'Set up a robust CI/CD pipeline using Jenkins and GitOps principles. By integrating Jenkins with various tools like Maven, SonarQube, Docker, Trivy, and ArgoCD, we have ensured secure builds, high-quality code, and seamless deployments. This setup not only automates the entire process from code commit to deployment but also incorporates essential security checks and quality gates, making it a reliable and efficient solution for modern software development.',
    url: 'https://jayeshrajput.hashnode.dev/jenkins-and-gitops-the-complete-guide-to-devsecops-cicd',
    previewImage: ProjectCICDGitOps,
    technologies: [
      'Jenkins',
      'AWS',
      'ArgoCD',
      'Kubernetes',
      'Docker',
      'Trivy',
      'SonarQube',
      'Maven',
    ],
  },
];

// export const TESTIMONIALS: TestimonialDetails[] = [
//   {
//     personName: 'Krisztian Gyuris',
//     personAvatar: AvatarKrisztian,
//     title: 'Founder - inboxgenie.io',
//     testimonial:
//       'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
//   },
//   {
//     personName: 'Eugen Esanu',
//     personAvatar: AvatarEugen,
//     title: 'Founder - shosho.design',
//     testimonial:
//       'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
//   },
//   {
//     personName: 'Joe Matkin',
//     personAvatar: AvatarDummy,
//     title: 'Freelancer',
//     testimonial:
//       'Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.',
//   },
//];
