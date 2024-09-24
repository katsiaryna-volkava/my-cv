import React from 'react';
import ProjectExperience from './ProjectExperience';
import './ProjectExperience.css';

const projects = [
    {
        companyName: 'EPAM Systems',
        position: 'Quality Assurance Engineer & Automation Quality Assurance Engineer',
        timeline: 'Sep 2017 - Dec 2019',
        projectDescription: 'This project involved developing an internal company system designed to streamline time reporting across the organization. The main objective was to provide a comprehensive time reporting functionality for all employees, allowing them to log and manage their working hours efficiently. In addition to the core time reporting features, the system included a suite of advanced functionalities tailored to various employee roles:',
        responsibilities: [
            'New feature testing, exploratory testing, GUI testing, API testing, 3rd party systems integration testing',
            'Creating automated tests for regression testing',
            'Requirements analysis and testing',
            'Creation of testing documentation: check-lists, test-cases, BDD scenarios',
            'Proactive participation in all Scrum ceremonies',
            'Bug hunting, deep root cause analysis of the issue and bug reporting',
            'Bugs verification and regression',
            'TRR creation for production deployment',
            'L3 support – issues investigation, communication with end users',
        ],
        projectStack: 'Java, Springboot, React, Node.js, Postgres, Kafka, Jenkins',
        testStack: 'Java, Selenium, Cucumber, TestNG'
    },
    {
        companyName: 'Syberry',
        position: 'Software Developer in Test, Team Lead',
        timeline: 'June 2020 - June 2023',
        projectDescription: 'A cloud-native platform designed to accelerate the integration of external data. The project streamlined the process of ingesting, validating, and transforming large datasets, reducing time and costs associated with data onboarding. We provided automated solutions and developed comprehensive dataset blueprints to enhance data preparation for efficient analytics and improved decision-making.',
        responsibilities: [
            'Performed end-to-end, integration, api and unit testing of a core platform.',
            'Conducted scalability testing.',
            'Detected and analyzed bugs.',
            'Created and maintained a comprehensive system of tests from scratch and continuously improved them.',
            'Developed and managed Test Plan and Test Strategy.',
            'Maintained and organized the QA backlog.',
            'Coordinated a team of 3 quality assurance engineers: assigned tasks, reviewed test designs, documentation, and pull requests.',
            'Organized and conducted onboarding for new SDETs.',
            'Provided feedback to team members and proposed improvements to existing processes.',
            'Participated in backlog prioritization calls with stakeholders.',
            'Defined testing milestones for both short-term and long-term perspectives.',
            'Organized full product testing for multiple product development streams.',
            'Facilitated knowledge transfer between different development streams to ensure seamless module integration.'
        ],
        projectStack: 'Java, Spring Boot, Gradle, Cadence, Airflow, Postgres, Cassandra, Snowflake, Big Query, GCP, Docker, Kubernetes, Kafka, Pub/Sub, Codefresh, Chargebee',
        testStack: 'Java, Selenium, SpringBoot Test, Gradle, Maven, Junit, Mockito, Docker, Test Containers, Rest Assured, Rest Template, Jmeter',
    },
    {
        companyName: 'Syberry',
        position: 'Software Developer in Test',
        timeline: 'July 2023 - Dec 2023',
        projectDescription: 'CRM web app for orders management',
        responsibilities: [
            'Created an automated test framework for end-to-end testing from scratch and maintained it.',
            'Analyzed requirements.',
            'Detected bugs.',
            'Verified bugs and performed regression testing.',
            'Conducted exploratory testing.',
            'Performed automated compatibility testing.'
        ],
        projectStack: 'Java, Spring Boot, Gradle, GitlabCI',
        testStack: 'Java, Playwright, Junit, SpringBoot Test, Gradle, GitlabCI',
    },
    {
        companyName: 'Syberry',
        position: 'Software Developer in Test',
        timeline: 'Jan 2024 - Aug 2024',
        projectDescription: 'A native iOS CRM application designed for efficient management of leads and trucks. The app streamlines the process of tracking and managing customer interactions, sales leads, and logistics operations related to truck management.',
        responsibilities: [
            'Created an automated test framework for end-to-end testing from scratch and maintained it.',
            'Analyzed requirements.',
            'Detected bugs.',
            'Verified bugs and performed regression testing.',
            'Conducted exploratory testing.',
            'Performed automated compatibility testing.'
        ],
        projectStack: 'React, Node.js, Expo GO, GitlabCI',
        testStack: 'Java, Appium, Junit, Allure, Browserstack, Gradle',
    },
    {
        companyName: 'Syberry',
        position: 'Software Developer in Test, Quality Assurance Lead',
        timeline: 'Apr 2024 - Sep 2024',
        projectDescription: 'A comprehensive web-based CRM application designed to manage various aspects of business operations, including leads, clients, projects, tickets, suppliers, and materials. The application provides a unified platform for tracking and managing customer interactions, project progress, support tickets, and supplier relationships. Key features include customizable dashboards, real-time updates, and detailed reporting, enabling efficient management and seamless integration of business processes.',
        responsibilities: [
            'Created end-to-end testing framework from scratch and maintained it.',
            'Defined test strategy',
            'Setup test processes to shift from QA testing to dev testing',
            'Assisted to developers in acceptance testing,helped defining use cases',
            'Controlled manual test execution',
            'Setup CI/CD pipeline for end-to-end tests'
        ],
        projectStack: 'Java, Springboot, React, Node.js, Gradle, GitlabCI',
        testStack: 'Java, Playwright, Junit, Allure, Gradle'
    },
    {
        companyName: 'Syberry',
        position: 'Quality Assurance Lead',
        timeline: 'May 2024 - present',
        projectDescription: 'Native mobile applications for iOS and Android that serve as a music-focused social network, allowing users to track their favorite artists, albums, and songs, as well as connect with friends based on shared musical tastes.',
        responsibilities: [
            'Defined test strategy',
            'Prepared framework for e2e testing',
            'Managed QA team',
            'Reviewed test progress and pull requests',
        ],
        projectStack: 'React Native, Node.js, AWS, Expo Go',
        testStack: 'Java, Appium, Junit, Allure, Browserstack, Gradle',
    },
    {
        companyName: 'Syberry',
        position: 'Quality Assurance Engineer',
        timeline: 'June 2024 - present',
        projectDescription: 'A comprehensive energy management system designed to optimize cost savings, conserve resources, and mitigate client risks through actionable energy analytics and sustainability reporting.',
        responsibilities: [
            'Managing and coordination of QA team',
            'QA Backlog prioritization',
            'Existing automation solutions review & improvements',
            'Test strategy and test processes adjustments to changing needs'
        ],
        projectStack: 'C#, .Net, MsSQL, Cassandra, Azure',
        testStack: 'Javascript, Cypress',
    },
    {
        companyName: 'Syberry',
        position: 'Quality Assurance Lead',
        timeline: 'Aug 2024 - present',
        projectDescription: 'A cloud-native scalable platform for performing background checks with extensive 3rd party systems integration and workflows orchestration engine.',
        responsibilities: [
            'Defined functional (automation & manual) test strategy',
            'Defined performance test strategy',
            'Defined a set of automation tools',
            'Prepared onboarding plan',
            'Prepared reusable documentation for DEV and QAs',
            'Setup test processes from scratch'
        ],
        projectStack: 'C#, .Net, React, Azure Сloud, Camunda',
        testStack: 'С#, Specflow, Playwright, Allure, Jmeter'
    }
];

function MyProjects() {
    return (
        <div>
            <h1>My Projects</h1>
            {projects.map((project, index) => (
                <ProjectExperience
                    key={index}
                    companyName={project.companyName}
                    position={project.position}
                    timeline={project.timeline}
                    projectDescription={project.projectDescription}
                    responsibilities={project.responsibilities}
                    projectStack={project.projectStack}
                    testStack={project.testStack}
                />
            ))}
        </div>
    );
}

export default MyProjects;
