import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faCircle} from "@fortawesome/free-solid-svg-icons";

class ContactForm extends Component {
    render() {
        return (
            <div className={"ContactFormContent"}>
                <div className={"wrapper columns-span-2"}>
                    <div className={"equal left"}>

                    </div>
                    <div className={"equal right"}>
                        <h3 className={"ContactFormTitle"}>contact form</h3>
                        <form>
                            <div className={"formGroup"}>
                                <label>Name</label>
                                <input/>
                            </div>
                            <div className={"formGroup"}>
                                <label>Company</label>
                                <input/>
                            </div>
                            <div className={"formGroup"}>
                                <label>Email</label>
                                <input/>
                            </div>
                            <div className={"formGroup"}>
                                <label>Message</label>
                                <textarea></textarea>
                            </div>
                            <button type="submit">Submit
                                <span className="fa-layers fa-fw">
                                    {/* <FontAwesomeIcon icon={faCircle}/>*/}
                                    <FontAwesomeIcon icon={faAngleRight} mask={['far', 'circle']} />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;