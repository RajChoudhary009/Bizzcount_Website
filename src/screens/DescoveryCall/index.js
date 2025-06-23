import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVER_API_URL } from '../../server/server'
import axios from 'axios';
import './index.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DiscoveryCallForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        company: '', referralSource: '', message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
            toast.error('Please fill all required fields');
            return;
        }

        try {
            const response = await axios.post(`${SERVER_API_URL}/api/discovery-calls`, formData);
            if (response.data.success === true) {
                toast.success('Discovery call scheduled!');
                setFormData({
                    firstName: '', lastName: '', email: '', phone: '',
                    company: '', referralSource: '', message: ''
                });

                // Delay for toast visibility then navigate back
                setTimeout(() => {
                    navigate(-1); // ⬅️ This navigates back
                }, 1500);
            } else {
                toast.error(response.message || 'Failed to schedule call');
            }
        } catch (error) {
            toast.error('Server error');
            console.error('Error submitting form:', error);
        }
    };

    const handleClose = () => {
        navigate(-1); // navigate to home
      };
      

    return (
        <div className="modal-overlay">
            <div className="form-container">
                <button className="close-button" onClick={handleClose}>×</button>
                <h2>Schedule a Discovery Call</h2>
                <p>We’ll be in touch within 24 hours!</p>

                <form onSubmit={handleSubmit}>
                    <div className="input-row">
                        <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                        <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                    </div>
                    <div className="input-row">
                        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
                    </div>
                    <div className="input-row">
                        <input name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" />
                        <input name="referralSource" value={formData.referralSource} onChange={handleChange} placeholder="How'd You Hear About Us" />
                    </div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter Message Here..."
                        rows="4"
                    />

                    <button type="submit" className="submit-button">Schedule a Discovery Call</button>
                </form>

                <p className="email-text">
                    Or send us an email at <a href="mailto:hello@BlueGrowthAdvisors.com">hello@BlueGrowthAdvisors.com</a>
                </p>

                <ToastContainer />
            </div>
        </div>
    );
};

export default DiscoveryCallForm;
