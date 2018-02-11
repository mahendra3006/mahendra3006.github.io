import compassLogo from '../images/compassites-logo.png';
import nextgenLogo from '../images/nextgen-logo.png';
import sapLogo from '../images/sap-logo.png';
import React, {Component} from 'react';
import CompanyTile from '../components/CompanyTile';
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

export default class WorkExperience extends Component {
    constructor() {
        super();
        this.state = {
            chartOptions: {
                title: {
                    display: true,
                    position: "top",
                    text: "Pie Chart",
                    fontSize: 18,
                    fontColor: "#111"
                },
                legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                        fontColor: "#333",
                        fontSize: 16
                    }
                }
            },
            compassites: [
                {
                    value: 33,
                    color: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "Lucror Analytics"
                },
                {
                    value: 33,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "Fusion Charts"
                },
                {
                    value: 33,
                    color: "#FDB45C",
                    highlight: "#FFC870",
                    label: "Fly High Marine"
                }],
            nextgen: [
                {
                    value: 50,
                    color: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "NEXTGEN NOW"
                },
                {
                    value: 50,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "MIRTH RESULTS"
                }],
            saplabs: [
                {
                    value: 50,
                    color: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "GAMIFICATION"
                },
                {
                    value: 50,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "HELABA FINANCIAL APPLICATION"
                }]
        }
    }

    render() {
        return (
            <div className="work-experience">
                <h2 className="center-align">Work Experience</h2>
                <Carousel>
                    <CarouselItem>
                        <CompanyTile chartData={this.state.compassites} logo={compassLogo}
                                     options={this.props.chartOptions}
                                     projects={[{
                                         header: "Lucror Analytics", domain: "Financial", description: <p className="font-medium">
                                             Lucror Analytics is a Singapore based firm providing financial analysis of
                                             various organizations of Europe and Asia. We created an online portal with
                                             a subscription model for the clients to get their analysis information.
                                             Team Size: 20
                                             Role: Developed multiple screens from comps and generated user reports and
                                             bug-fixing.
                                             Technologies: .NET MVC, JavaScript, MSSQL Server 2008
                                         </p>
                                     },
                                         {
                                             header: "Fly High Marine", domain: "Flight Booking", description: <p className="font-medium">
                                             FHM is an organization providing airline and hotel bookings for Marines and
                                             Shipping Crew members. They are using Amadeus, Galileo and Mystifly APIs
                                             for seat availability and reservations. We provided an online portal to
                                             replace the manual tasks involved.
                                             Team Size: 10
                                             Role: Developed the entire UI layer in Angular.js, Jasmine JS, Play
                                             Framework controllers and helped in database design. Also, took part in
                                             analysis, development, bug-fixing and technical discussions with client.
                                             Technologies: Angular JS , Play Framework, Spring AOP, Spring DI, Web
                                             Sockets, Amadeus API, Redis and MySQL.
                                         </p>
                                         },
                                         {
                                             header: "Fusion Charts", domain: "Developer Plugin", description: <p className="font-medium">
                                             FusionCharts is a Bangalore based organization, providing for Enterprise
                                             Charting Solutions to over 500 international clients. They have created an
                                             open-source API document generator based on JSDOC for creating the
                                             descriptions for their charts.
                                             Team Size: 10
                                             Role: Developed multiple plugins for parsing different keywords. Also,
                                             created test-suites using Jasmine along with bug-fixing.
                                             Technologies: Technologies: JavaScript, Node JS, Require JS, Jasmine,
                                             Postgres DB.
                                         </p>
                                         }
                                     ]}>
                        </CompanyTile>
                    </CarouselItem>
                    <CarouselItem>
                        <CompanyTile chartData={this.state.nextgen} logo={nextgenLogo} options={this.props.chartOptions}
                                     projects={[{
                                         header: "MIRTH RESULTS", domain: "Healthcare Cloud Service", description: <p className="font-medium">
                                             Mirth results is a Healthcare data repository for aggregating
                                             data from
                                             different health providers and provide seamless data transfers between
                                             these
                                             disparate systems using HL7 and CCD-A document standards.
                                             Team Size: 5
                                             Role: I had worked on the development of UI Pattern library for the
                                             platform, known
                                             as Zest. It is an open source library backed and supported by Mirth. I
                                             build
                                             controls from scratch to support uniform design and functionality across
                                             the
                                             library, along with writing Unit tests for these controls and achieving
                                             100% code
                                             coverage.
                                             Technologies: Angular JS, HTML/CSS, Karma, Jasmine and Istanbul.

                                         </p>
                                     },
                                         {
                                             header: "NEXTGEN NOW", domain: "Flight Booking", description: <p className="font-medium">

                                             NGNow was a Healthcare domain product which aims to provide
                                             clinical,
                                             financial and connectivity solutions for ambulatory, inpatient and dental
                                             provide.
                                             Team Size: 100
                                             Role: I worked on the development of UI side of the DMS (Document
                                             Management
                                             System) of the app which handled all the files and uploads in the app. I
                                             helped
                                             create HTML views and Angular JS controllers for pages, helped consume Java
                                             APIs,
                                             and integrated third-party UI libraries for various operations on documents
                                             such as
                                             format conversion, rotation, cropping, etc.
                                             Technologies: Angular JS, Node.JS, Web Socket, Java, Redis ,Rabbit MQ and
                                             PostgreSQL DB.

                                         </p>
                                         }
                                     ]}>
                        </CompanyTile>
                    </CarouselItem>
                    <CarouselItem>
                        <CompanyTile chartData={this.state.saplabs} logo={sapLogo} options={this.props.chartOptions}
                                     projects={[{
                                         header: "HELABA FINANCIAL APPLICATION",
                                         domain: "Banking and Financial",
                                         description: <p className="font-medium">
                                             Helaba is a bank based out of Germany. SAP is proving a custom development
                                             solution
                                             to Helaba using the latest S4 HANA cloud platform along with smart
                                             templates as UI
                                             elements. This project uses Agile methodology for delivery.Helaba is a bank
                                             based
                                             out of Germany. SAP is proving a custom development solution to Helaba
                                             using the
                                             latest S4 HANA cloud platform along with smart templates as UI elements.
                                             This
                                             project uses Agile methodology for delivery.

                                             As a team member, I majorly work on building reusable UI components and
                                             different
                                             screens from the mockups and wireframes provided by the designers. I write
                                             unit
                                             tests and integration tests for various modules along with moving the
                                             completed
                                             modules to prod and test servers.

                                             Technologies: SAP UI5, Smart Templates, Draft, Hana Cloud Platform, HCC,
                                             OPA, QUnit.
                                             Team Size: 40
                                         </p>

                                     },
                                         {
                                             header: "GAMIFICATION", domain: "Cloud Service", description: <p className="font-medium">
                                             Gamification is a service provided in the SAP HANA Cloud platform to gamify
                                             various
                                             configurable data. We used this service to convert monotonous and boring
                                             activities
                                             like filling timesheet into interesting events with the help of games,
                                             points,
                                             levels and badges.
                                             Team Size: 10
                                             Role: As a team member, I was working on the development of UI elements as
                                             well as
                                             suggesting design for these elements.
                                             Technologies: SAP UI5, HTML/CSS, OPA, QUnit, HCP.

                                         </p>
                                         }
                                     ]}>
                        </CompanyTile>
                    </CarouselItem>
                </Carousel>
            </div>
        )
    }


}