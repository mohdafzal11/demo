import React from "react";
import Ellipse59 from '../images/Ellipse59.png'
import group9676 from "../images/Group9676.svg"
import Vector7151 from "../images/Vector 1751.png"
import "./CCGetres.css";
import Navbar from "../Components/LightNavbar";

export const CCGetres = () => {
    return (<>
        <Navbar/>
        <div className="carbon-calculator">
            <div className="divres">
                <div className="overlap">
                    <div className="overlap-group">
                        <img className="Ellipse59" alt="Ellipse" src={Ellipse59} />
                        {/* <NavBar className="nav-bar-instance" logoLogo="logo-2.svg" /> */}
                        <p className="p">Approximate cost for light upgradation</p>
                        <p className="text-wrappe-2">ROI - return of investment</p>
                        <div className="text-wrappe-3">Carbon saving potential</div>
                        <div className="energy-and-carbon">
                            Energy and carbon
                            <br />
                            savings annually
                        </div>
                        <p className="element-euros">
                            <span className="span">8590</span>
                            <span className="text-wrappe-4">&nbsp;</span>
                            <span className="text-wrappe-5">Euros</span>
                        </p>
                        <p className="element-months">
                            <span className="span">18</span>
                            <span className="text-wrappe-4">&nbsp;</span>
                            <span className="text-wrappe-5">Months</span>
                        </p>
                        <div className="text-wrappe-6">85%</div>
                        <div className="ellipse-2" />
                        <img className="img" alt="Ellipse" src="ellipse-58.svg" />
                        {/* <Button className="button-1" property1="default" text="Contact Us" /> */}
                        <div className="group">
                            <button
                                className="button-instance"
                                divClassName="button-1-instance"
                                property1="default"
                                text=""
                            >
                                Repeat the test</button>
                            <div className="group-2">
                                <div className="text-wrappe-7">Why to upgrade lighting?</div>
                                <div className="overlap-group-wrappe">
                                    <div className="overlap-group-2">
                                        <div className="ellipse-3" />
                                        <div className="rectangle" />
                                        <div className="ellipse-4" />
                                    </div>
                                </div>
                            </div>
                            <div className="overlap-wrappe">
                                <div className="overlap-2">
                                    <button className="button-2">
                                       <div className="button-2t">
                                       Download report</div>
                                    </button>
                                    <img className="group-3" alt="Group" src={group9676} />
                                </div>
                            </div>
                            <img className="vector-2" alt="Vector" src={Vector7151}/>
                        </div>
                        <p className="text-wrappe-8">To know more about your savings and what to do next, contact us!</p>
                    </div>
                    <p className="text-wrappe-9">Your current light carbon footprint</p>
                    <div className="overlap-3">
                        <div className="text-wrappe-10">Annual emission of CO2</div>
                        <p className="element-kg">
                            <span className="text-wrappe-11">74638</span>
                            <span className="text-wrappe-12">&nbsp;</span>
                            <span className="text-wrappe-13">Kg</span>
                        </p>
                        <div className="ellipse-5" />
                    </div>
                    {/* <Vector className="vector-instance" /> */}
                </div>
                <div className="expand-text">
                    <div className="flexcontainer">
                        <p className="text-i">
                            <span className="text-wrappe-14">
                                Benefit from government subsidies
                                <br />
                            </span>
                        </p>
                        <p className="text-i">
                            <span className="text-wrappe-15">
                                Lighting consumes up to 30% of energy for building and cities.
                                <br />
                            </span>
                        </p>
                        <p className="text-i">
                            <span className="text-wrappe-15">
                                Upgrading light sources to efficient solution leads to direct reduction in carbon footprint.
                                <br />
                            </span>
                        </p>
                        <p className="text-i">
                            <span className="text-wrappe-15">
                                Review light study of your facility to analyse the existing energy consumption.
                                <br />
                            </span>
                        </p>
                        <p className="text-i">
                            <span className="text-wrappe-15">
                                Identify the potential of energy savings.
                                <br />
                            </span>
                        </p>
                        <p className="text-i">
                            <span className="text-wrappe-15">
                                Observe the plan with solutions and their impact in achieving your sustainability goals.
                                <br />
                            </span>
                        </p>
                        <p className="text-i">
                            <span className="text-wrappe-15">Record the direct impact in light carbon reduction.</span>
                        </p>
                    </div>
                    <div className="group-4">
                        <div className="text-wrappe-16">Why to upgrade lighting?</div>
                        <img className="vector-3" alt="Vector" src="vector-1746.svg" />
                    </div>
                </div>
                {/* <Button
                    className="button-3"
                    divClassName="design-component-instance-node"
                    property1="default"
                    text="Download report"
                />
                <PropertyDefaultWrapper
                    className="button-4"
                    divClassName="button-1-instance"
                    property1="default"
                    text="Repeat the test"
                /> */}
                <img className="group-5" alt="Group" src="group-9676.png" />
               
            </div>
            
        </div>
         <button className="buttonc">
                                       <div>
                                       Contact Us</div>
                                    </button>
        </>
    );
};
export default CCGetres