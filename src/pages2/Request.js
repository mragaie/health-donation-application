import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/Request.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

function Request() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [details, setDetails] = useState({
    bloodType: '',
    location: '',
    date: '',
    time: '',
    medicationName: '',
    medicationQuantity: '',
    suppliesType: '',
    suppliesQuantity: '',
    suppliesCondition: '',
    suppliesExpiration: '',
    appointmentType: '',
    appointmentLocation: '',
    appointmentTimeSlots: '',
    bookTitle: '',
    bookAuthor: '',
    bookEdition: '',
    bookCondition: '',
    bookQuantity: '',
    bookSubject: '',
    suppliesAgeGroup: '',
    teachingSubject: '',
    teachingLevel: '',
    teachingMethod: '',
    teachingDuration: '',
    apartmentLocation: '',
    apartmentRooms: '',
    apartmentAmenities: '',
    apartmentTerms: '',
    clothingType: '',
    clothingSize: '',
    clothingGender: '',
    clothingCondition: '',
    clothingQuantity: '',
    foodType: '',
    foodQuantity: '',
    foodExpiration: '',
    foodRestrictions: '',
    foodPackaging: '',
    applianceType: '',
    applianceBrand: '',
    applianceModel: '',
    applianceCondition: '',
    toyType: '',
    toyAgeRange: '',
    toyCondition: '',
    toyQuantity: '',
    toySafetyConsiderations: '',
    luxuryFoodType: '',
    luxuryFoodBrand: '',
    luxuryFoodExpiration: ''
  });
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRequiredDetailsFilled, setIsRequiredDetailsFilled] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && checkRequiredDetails(category)) {
      setIsSubmitted(true);
      setSubmissionMessage('Item has been submitted successfully.');
      navigate('/requestdone');
    } else {
      setIsRequiredDetailsFilled(false);
      setSubmissionMessage('Please fill in all required details.');
    }
  };

  const checkRequiredDetails = (category) => {
    switch (category) {
      case 'BloodDonation':
        return details.bloodType && details.location && details.date && details.time;
      case 'Medication':
        return details.medicationName && details.medicationQuantity;
      case 'MedicalSupplies':
        return details.suppliesType && details.suppliesQuantity && details.suppliesCondition && details.suppliesExpiration;
      case 'ProBonoCheckUP':
        return details.appointmentType && details.appointmentLocation && details.appointmentTimeSlots;
      case 'SchoolBooks':
        return details.bookTitle && details.bookAuthor && details.bookEdition && details.bookCondition && details.bookQuantity && details.bookSubject;
      case 'SchoolSupplies':
        return details.suppliesType && details.suppliesQuantity && details.suppliesCondition && details.suppliesAgeGroup;
      case 'ProBonoTeaching':
        return details.teachingSubject && details.teachingLevel && details.teachingMethod && details.teachingDuration;
      case 'Appartment':
        return details.apartmentLocation && details.apartmentRooms && details.apartmentAmenities && details.apartmentTerms;
      case 'Clothes':
      case 'Shoes':
      case 'Bags':
        return details.clothingType && details.clothingSize && details.clothingGender && details.clothingCondition && details.clothingQuantity;
      case 'Groceries':
        return details.foodType && details.foodQuantity && details.foodExpiration && details.foodRestrictions && details.foodPackaging;
      case 'ElectricalAppliance':
        return details.applianceType && details.applianceBrand && details.applianceModel && details.applianceCondition;
      case 'Toys':
        return details.toyType && details.toyAgeRange && details.toyCondition && details.toyQuantity && details.toySafetyConsiderations;
      case 'LuxuryFoods':
        return details.luxuryFoodType && details.luxuryFoodBrand && details.luxuryFoodExpiration;
      default:
        return false;
    }
  };

  return (
    <div className='Requestss'>
      <Navbar />
      <div className="Request">

        <div>
          <h1>Submission of Donation Posts</h1>
          {isSubmitted ? (
            <>
              <p>{submissionMessage}</p>
              <button onClick={() => navigate('/request')}>Request Again</button>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="category">Category:</label>
                <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Select category</option>
                  <option value="BloodDonation">Blood Donation</option>
                  <option value="Medication">Medication</option>
                  <option value="MedicalSupplies">Medical Supplies</option>
                  <option value="ProBonoCheckUP">Pro-Bono Doctor appointments</option>
                  <option value="SchoolBooks">School Books</option>
                  <option value="SchoolSupplies">School Supplies</option>
                  <option value="ProBonoTeaching">Pro-Bono Teaching</option>
                  <option value="Appartment">Apartments/ living quarters (free or low rent)</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Bags">Bags</option>
                  <option value="Groceries">Food and groceries (includes fresh food)</option>
                  <option value="ElectricalAppliance">Electrical appliances</option>
                  <option value="Toys">Toys</option>
                  <option value="LuxuryFoods">Luxury foods (cakes, sweets, etc..)</option>
                </select>
              </div>
              {isRequiredDetailsFilled ? null : <p className="errorMessage">Please fill in the required details.</p>}
              {/* Text boxes for details */}
              {category && (
                <>
                  {/* Blood Donation */}
                  {category === 'BloodDonation' && (
                    <>
                      <div>
                        <label htmlFor="bloodType">Blood Type:</label>
                        <input type="text" id="bloodType" value={details.bloodType} onChange={(e) => setDetails({ ...details, bloodType: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="location">Location:</label>
                        <input type="text" id="location" value={details.location} onChange={(e) => setDetails({ ...details, location: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="date">Date:</label>
                        <input type="text" id="date" value={details.date} onChange={(e) => setDetails({ ...details, date: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="time">Time:</label>
                        <input type="text" id="time" value={details.time} onChange={(e) => setDetails({ ...details, time: e.target.value })} />
                      </div>
                    </>
                  )}
                  {/* Medication */}
                  {category === 'Medication' && (
                    <>
                      <div>
                        <label htmlFor="medicationName">Medication Name:</label>
                        <input type="text" id="medicationName" value={details.medicationName} onChange={(e) => setDetails({ ...details, medicationName: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="medicationQuantity">Quantity:</label>
                        <input type="text" id="medicationQuantity" value={details.medicationQuantity} onChange={(e) => setDetails({ ...details, medicationQuantity: e.target.value })} />
                      </div>
                    </>
                  )}
                  {category === 'MedicalSupplies' && (
                    <>
                      <div>
                        <label htmlFor="suppliesType">Type of Supplies:</label>
                        <input type="text" id="suppliesType" value={details.suppliesType} onChange={(e) => setDetails({ ...details, suppliesType: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="suppliesQuantity">Quantity Available:</label>
                        <input type="text" id="suppliesQuantity" value={details.suppliesQuantity} onChange={(e) => setDetails({ ...details, suppliesQuantity: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="suppliesCondition">Condition:</label>
                        <input type="text" id="suppliesCondition" value={details.suppliesCondition} onChange={(e) => setDetails({ ...details, suppliesCondition: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="suppliesExpiration">Expiration Date:</label>
                        <input type="text" id="suppliesExpiration" value={details.suppliesExpiration} onChange={(e) => setDetails({ ...details, suppliesExpiration: e.target.value })} />
                      </div>
                    </>
                  )}
                  {category === 'ProBonoCheckUP' && (
                    <>
                      <div>
                        <label htmlFor="appointmentType">Type of Appointment:</label>
                        <input type="text" id="appointmentType" value={details.appointmentType} onChange={(e) => setDetails({ ...details, appointmentType: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="appointmentLocation">Location:</label>
                        <input type="text" id="appointmentLocation" value={details.appointmentLocation} onChange={(e) => setDetails({ ...details, appointmentLocation: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="appointmentTimeSlots">Available Time Slots:</label>
                        <input type="text" id="appointmentTimeSlots" value={details.appointmentTimeSlots} onChange={(e) => setDetails({ ...details, appointmentTimeSlots: e.target.value })} />
                      </div>
                    </>
                  )}
                  {category === 'SchoolBooks' && (
                    <>
                      <div>
                        <label htmlFor="bookTitle">Title of the Book:</label>
                        <input type="text" id="bookTitle" value={details.bookTitle} onChange={(e) => setDetails({ ...details, bookTitle: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="bookAuthor">Author:</label>
                        <input type="text" id="bookAuthor" value={details.bookAuthor} onChange={(e) => setDetails({ ...details, bookAuthor: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="bookEdition">Edition:</label>
                        <input type="text" id="bookEdition" value={details.bookEdition} onChange={(e) => setDetails({ ...details, bookEdition: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="bookCondition">Condition:</label>
                        <input type="text" id="bookCondition" value={details.bookCondition} onChange={(e) => setDetails({ ...details, bookCondition: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="bookQuantity">Quantity Available:</label>
                        <input type="text" id="bookQuantity" value={details.bookQuantity} onChange={(e) => setDetails({ ...details, bookQuantity: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="bookSubject">Subject or Grade Level:</label>
                        <input type="text" id="bookSubject" value={details.bookSubject} onChange={(e) => setDetails({ ...details, bookSubject: e.target.value })} />
                      </div>
                    </>
                  )}
                  {category === 'SchoolSupplies' && (
                    <>
                      <div>
                        <label htmlFor="suppliesType">Type of Supplies:</label>
                        <input type="text" id="suppliesType" value={details.suppliesType} onChange={(e) => setDetails({ ...details, suppliesType: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="suppliesQuantity">Quantity Available:</label>
                        <input type="text" id="suppliesQuantity" value={details.suppliesQuantity} onChange={(e) => setDetails({ ...details, suppliesQuantity: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="suppliesCondition">Condition:</label>
                        <input type="text" id="suppliesCondition" value={details.suppliesCondition} onChange={(e) => setDetails({ ...details, suppliesCondition: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="suppliesAgeGroup">Target Age Group:</label>
                        <input type="text" id="suppliesAgeGroup" value={details.suppliesAgeGroup} onChange={(e) => setDetails({ ...details, suppliesAgeGroup: e.target.value })} />
                      </div>
                    </>
                  )}
                  {category === 'ProBonoTeaching' && (
                    <>
                      <div>
                        <label htmlFor="teachingSubject">Subject or Topic:</label>
                        <input type="text" id="teachingSubject" value={details.teachingSubject} onChange={(e) => setDetails({ ...details, teachingSubject: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="teachingLevel">Level of Education:</label>
                        <input type="text" id="teachingLevel" value={details.teachingLevel} onChange={(e) => setDetails({ ...details, teachingLevel: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="teachingMethod">Preferred Teaching Method:</label>
                        <input type="text" id="teachingMethod" value={details.teachingMethod} onChange={(e) => setDetails({ ...details, teachingMethod: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="teachingDuration">Duration of Teaching Sessions:</label>
                        <input type="text" id="teachingDuration" value={details.teachingDuration} onChange={(e) => setDetails({ ...details, teachingDuration: e.target.value })} />
                      </div>
                    </>
                  )}
                  {category === 'Appartment' && (
                    <>
                      <div>
                        <label htmlFor="apartmentLocation">Location of the Apartment:</label>
                        <input type="text" id="apartmentLocation" value={details.apartmentLocation} onChange={(e) => setDetails({ ...details, apartmentLocation: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="apartmentRooms">Number of Rooms:</label>
                        <input type="text" id="apartmentRooms" value={details.apartmentRooms} onChange={(e) => setDetails({ ...details, apartmentRooms: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="apartmentAmenities">Amenities Available:</label>
                        <input type="text" id="apartmentAmenities" value={details.apartmentAmenities} onChange={(e) => setDetails({ ...details, apartmentAmenities: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="apartmentTerms">Rental Terms:</label>
                        <input type="text" id="apartmentTerms" value={details.apartmentTerms} onChange={(e) => setDetails({ ...details, apartmentTerms: e.target.value })} />
                      </div>
                    </>
                  )}
                  {(category === 'Clothes' || category === 'Shoes' || category === 'Bags') && (
                    <>
                      <div>
                        <label htmlFor="clothingType">Type of Clothing or Accessory:</label>
                        <input type="text" id="clothingType" value={details.clothingType} onChange={(e) => setDetails({ ...details, clothingType: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="clothingSize">Size:</label>
                        <input type="text" id="clothingSize" value={details.clothingSize} onChange={(e) => setDetails({ ...details, clothingSize: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="clothingGender">Gender:</label>
                        <input type="text" id="clothingGender" value={details.clothingGender} onChange={(e) => setDetails({ ...details, clothingGender: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="clothingCondition">Condition:</label>
                        <input type="text" id="clothingCondition" value={details.clothingCondition} onChange={(e) => setDetails({ ...details, clothingCondition: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="clothingQuantity">Quantity Available:</label>
                        <input type="text" id="clothingQuantity" value={details.clothingQuantity} onChange={(e) => setDetails({ ...details, clothingQuantity: e.target.value })} />
                      </div>
                    </>
                  )}
                  {category === 'Groceries' && (
                    <>
                      <div>
                        <label htmlFor="foodType">Type of Food Items:</label>
                        <input type="text" id="foodType" value={details.foodType} onChange={(e) => setDetails({ ...details, foodType: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="foodQuantity">Quantity Available:</label>
                        <input type="text" id="foodQuantity" value={details.foodQuantity} onChange={(e) => setDetails({ ...details, foodQuantity: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="foodExpiration">Expiration Date:</label>
                        <input type="text" id="foodExpiration" value={details.foodExpiration} onChange={(e) => setDetails({ ...details, foodExpiration: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="foodRestrictions">Dietary Restrictions:</label>
                        <input type="text" id="foodRestrictions" value={details.foodRestrictions} onChange={(e) => setDetails({ ...details, foodRestrictions: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="foodPackaging">Packaging Information:</label>
                        <input type="text" id="foodPackaging" value={details.foodPackaging} onChange={(e) => setDetails({ ...details, foodPackaging: e.target.value })} />
                      </div>
                    </>
                  )}
                  {category === 'ElectricalAppliance' && (
                    <>
                      <div>
                        <label htmlFor="applianceType">Type of Appliance:</label>
                        <input type="text" id="applianceType" value={details.applianceType} onChange={(e) => setDetails({ ...details, applianceType: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="applianceBrand">Brand:</label>
                        <input type="text" id="applianceBrand" value={details.applianceBrand} onChange={(e) => setDetails({ ...details, applianceBrand: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="applianceModel">Model Number:</label>
                        <input type="text" id="applianceModel" value={details.applianceModel} onChange={(e) => setDetails({ ...details, applianceModel: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="applianceCondition">Condition:</label>
                        <input type="text" id="applianceCondition" value={details.applianceCondition} onChange={(e) => setDetails({ ...details, applianceCondition: e.target.value })} />
                      </div>
                    </>
                  )}
                  {category === 'Toys' && (
                    <>
                      <div>
                        <label htmlFor="toyType">Type of Toy:</label>
                        <input type="text" id="toyType" value={details.toyType} onChange={(e) => setDetails({ ...details, toyType: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="toyAgeRange">Age Range:</label>
                        <input type="text" id="toyAgeRange" value={details.toyAgeRange} onChange={(e) => setDetails({ ...details, toyAgeRange: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="toyCondition">Condition:</label>
                        <input type="text" id="toyCondition" value={details.toyCondition} onChange={(e) => setDetails({ ...details, toyCondition: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="toyQuantity">Quantity Available:</label>
                        <input type="text" id="toyQuantity" value={details.toyQuantity} onChange={(e) => setDetails({ ...details, toyQuantity: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="toySafetyConsiderations">Safety Considerations:</label>
                        <input type="text" id="toySafetyConsiderations" value={details.toySafetyConsiderations} onChange={(e) => setDetails({ ...details, toySafetyConsiderations: e.target.value })} />
                      </div>
                    </>
                  )}
                  {category === 'LuxuryFoods' && (
                    <>
                      <div>
                        <label htmlFor="luxuryFoodType">Type of Food Item:</label>
                        <input type="text" id="luxuryFoodType" value={details.luxuryFoodType} onChange={(e) => setDetails({ ...details, luxuryFoodType: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="luxuryFoodBrand">Brand or Producer:</label>
                        <input type="text" id="luxuryFoodBrand" value={details.luxuryFoodBrand} onChange={(e) => setDetails({ ...details, luxuryFoodBrand: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="luxuryFoodExpiration">Expiration Date:</label>
                        <input type="text" id="luxuryFoodExpiration" value={details.luxuryFoodExpiration} onChange={(e) => setDetails({ ...details, luxuryFoodExpiration: e.target.value })} />
                      </div>
                    </>
                  )}
                </>
              )}
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Request;
