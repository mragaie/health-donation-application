import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import DonOrg from './pages/OrgandDon';
import PasswordChange from './pages/PasswordChange';
import OrganizationList from './helper/OrganizationList';
import RegisteredOrganizationsData from './pages/RegisteredOrganizations'
import OrganizationDetails from './helper/OrgDetails'
import SubmissionReview from './helper/SubmissionReview';
import SubmissionReviewOrg from './helper/SubmissionReviewOrg';
import Pen from "./helper/pendingOrg";
import SignUp1 from "./pages/signup2";
import AdminDashboard from './pages/AdminDashBoard';
import Fulfiled from './pages/Fulfilledreq'
import Volunteer from './pages/Volunteer';
import Map from './comp/OpenLayersMap'
import Postorg from './pages/postorg'
import DonViewOrg from './pages/DonorViewOrg'
import Navbar2 from "./comp/NavBar2"
import Footer from "./components/Footer";





import HomePage from "./Pages3/Home";
import Contact from './Pages3/Contact';
import Registration from './Pages3/Registration';
import DonationRequests from './Pages3/DonationRequests';
import Blood from './Pages3/Blood';
import Food from './Pages3/Food';
import Medical from './Pages3/Medical';
import Toys from './Pages3/Toys';
import School from './Pages3/School';
import Clothes from './Pages3/Clothes';
import Clothes1 from './Pages3/Clothes1';
import Clothes3 from './Pages3/Clothes3';
import Clothes13 from './Pages3/Clothes13';
import Clothes18 from './Pages3/Clothes18';
import FemClothesDetails from './Pages3/FemClothesDetails';
import ToysDetails from './Pages3/ToysDetails';
import BloodDetails from './Pages3/BloodDetails';
import FoodDetails from './Pages3/FoodDetails';
import BookDetails from './Pages3/BookDetails';
import StationaryDetails from './Pages3/StationaryDetails';
import MedicalDetails from './Pages3/MedicalDetails';
import FilteredToys from './Pages3/FilteredToys';
import Books from './Pages3/Books';
import Stationary from './Pages3/Stationary';
import SelectQuan1 from './Pages3/SelectQuan1';
import Submitted from './Pages3/Submitted';
import RegularDonor from './Pages3/RegularDonor';
import DoctorMain from './Pages3/DoctorMain';
import UploadDocument from './Pages3/UploadDocument';
import VerifySubmit from './Pages3/VerifySubmit';
import MyClinic from './Pages3/MyClinic';
import UpdateInfo from './Pages3/UpdateInfo';
import SubmitClinic from './Pages3/SubmitClinic';
import MedicalCases from './Pages3/MedicalCases';
import CasesDetails from './Pages3/CasesDetails';
import CaseFulFilled from './Pages3/CaseFulFilled';
import TeacherMain from './Pages3/TeacherMain';
import SubjectForm from './Pages3/SubjectForm';
import SubjectSubmitted from './Pages3/SubjectSubmitted';
import UploadDocumentTeacher from './Pages3/UploadDocumentTeacher';
import TeachingPosts from './Pages3/TeachingPosts';
import TeachingDetails from './Pages3/TeachingDetails';
import TeachFulFilled from './Pages3/TeachFulFilled';
import ClothesDetailsMale from './Pages3/ClothesDetailsMale';
import ClothesDetails1 from './Pages3/ClothesDetails1';
import ClothesDetails4 from './Pages3/ClothesDetails4';
import ToysDetails1fem from './Pages3/ToysDetails1fem';
import ToysFem1 from './Pages3/ToysFem1';
import ToysMale4 from './Pages3/ToysMale4';
import ToysDetailsMale4 from './Pages3/ToysDetailsMale4';
import ToysStuffed from './Pages3/ToysStuffed';
import ToysStuffedDetails from './Pages3/ToysStuffedDetails';
import ToysSports from './Pages3/ToysSports';
import ToysSportsDetails from './Pages3/ToysSportsDetails';
import FoodBaked from './Pages3/FoodBaked';
import FoodCanned from './Pages3/FoodCanned';
import FoodFresh from './Pages3/FoodFresh';
import FoodFruits from './Pages3/FoodFruits';
import FoodVegetables from './Pages3/FoodVegetables';
import FoodBakedDetails from './Pages3/FoodBakedDetails';
import FoodCannedDetails from './Pages3/FoodCannedDetails';
import FoodFreshDetails from './Pages3/FoodFreshDetails';
import FoodFruitDetails from './Pages3/FoodFruitDetails';
import FoodVegetablesDetails from './Pages3/FoodVegetablesDetails';
import Boardm from './Pages3/Boardm';
import Boardmdetails from './Pages3/Boardmdetails';
import StomMed from './Pages3/StomMed';
import AssistiveDev from './Pages3/AssistiveDev';
import MedicalDevices from './Pages3/MedicalDevices';
import MedicalEquipment from './Pages3/MedicalEquipment';
import Medications from './Pages3/Medications';
import Allmeds from './Pages3/Allmeds';
import Cotton from './Pages3/Cotton';
import ProfileDonor from './Pages3/ProfileDonor';
import MedicalDetails2 from './Pages3/MedicalDetails2';
import MedicalDetails3 from './Pages3/MedicalDetails3';
import BloodHos1 from './Pages3/BloodHos1';
import Outdoorpage2 from './Pages3/Outdoorpage2';
import Outdoordetails2 from './Pages3/Outdoordetails2';
import Pickup from './Pages3/Pickup';
import PopUpMap from './Pages3/PopUpMap';
import TeachingMath from './Pages3/TeachingMath';
import CaseDetails2 from './Pages3/CaseDetails2';
import CaseSurgery from './Pages3/CaseSurgery';
import Neurology from './Pages3/Neurology';
import CaseDetails3 from './Pages3/CaseDetails3';
import TeachingEnglish from './Pages3/TeachingEnglish';
import TeachingDetails3 from './Pages3/TeachingDetails3';






import Home from "./pages2/home"
import Request from "./pages2/Request";
import Requestdone from "./pages2/requestdone";
import notify1 from "./pages2/notificationOne";
import NotificationOne from './pages2/notificationOne';
import Fullfilled from "./pages2/fullfilled"
import FullfilledDetails from './pages2/FullfilledDetails';
import ProfileOrg from "./pages2/profileOrg";
import Navbar from "./components/navbar";






function App() {
  useEffect(() => {
    document.title = 'chartyDonationApp';  // Set the desired title here
  }, []);
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />{/*signup page 1*/}
          <Route path="/donorg" element={<DonOrg />} />  {/* donor and organization lists 2*/}
          {/* <Route path="/organizations/:orgId" element={<OrganizationDetails />} />the details for the org 7 */}
          <Route path="/settings" element={<PasswordChange />} />{/*changing passwords 5*/}
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/registeredOrg" element={<RegisteredOrganizationsData />} />{/*filter organizations based on criteria 6*/}
          <Route path="/DonViewOrg" element={<DonViewOrg />} />{/*filter organizations based on criteria 6*/}
          <Route path="/SubmissionReviewOrg" element={<SubmissionReviewOrg />} />{/* Delete Organization or Donor Account 8*/}
          <Route path="/SubmissionReviewDonor" element={<SubmissionReview />} />{/* Delete Organization or Donor Account 8*/}
          {/* <Route path="/organization-details/:orgid" element={<Pen />} />3 */}
          <Route path="/organization/Fulfilledrequest" element={<Fulfiled />} />
          <Route path="/Volunteer" element={<Volunteer />} />
          <Route path="/map" element={<Map />} />
          <Route path="/organization/postorg" element={<Postorg />} />




          <Route exact path="/donor" element={<HomePage />} />
          <Route exact path="/donationRequests" element={<DonationRequests />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/bloodlist" element={<Blood />} />
          <Route exact path="/foodlist" element={<Food />} />
          <Route exact path="/medicallist" element={<Medical />} />
          <Route exact path="/toyslist" element={<Toys />} />
          <Route exact path="/schoollist" element={<School />} />
          <Route exact path="/clotheslist" element={<Clothes />} />
          <Route exact path="/clothes1list" element={<Clothes1 />} />
          <Route exact path="/clothes3list" element={<Clothes3 />} />
          <Route exact path="/clothes13list" element={<Clothes13 />} />
          <Route exact path="/clothes18list" element={<Clothes18 />} />
          <Route exact path="/femclothesdetails" element={<FemClothesDetails />} />
          <Route exact path="/toysdetails" element={<ToysDetails />} />
          <Route exact path="/blooddetails" element={<BloodDetails />} />
          <Route exact path="/fooddetails" element={<FoodDetails />} />
          <Route exact path="/bookdetails" element={<BookDetails />} />
          <Route exact path="/stationarydetails" element={<StationaryDetails />} />
          <Route exact path="/medicaldetails" element={<MedicalDetails />} />
          <Route exact path="/filteredtoys" element={<FilteredToys />} />
          <Route exact path="/bookslist" element={<Books />} />
          <Route exact path="/stationarylist" element={<Stationary />} />
          <Route exact path="/selectquan1" element={<SelectQuan1 />} />
          <Route exact path="/submitted" element={<Submitted />} />
          <Route exact path="/regulardonor" element={<RegularDonor />} />
          <Route exact path="/doctormain" element={<DoctorMain />} />
          <Route exact path="/uploaddocument" element={<UploadDocument />} />
          <Route exact path="/doctorsubmitted" element={<VerifySubmit />} />
          <Route exact path="/myclinic" element={<MyClinic />} />
          <Route exact path="/updateinfo" element={<UpdateInfo />} />
          <Route exact path="/submitclinic" element={<SubmitClinic />} />
          <Route exact path="/medicalcases" element={<MedicalCases />} />
          <Route exact path="/casesdetails" element={<CasesDetails />} />
          <Route exact path="/casefulfilled" element={<CaseFulFilled />} />
          <Route exact path="/teachermain" element={<TeacherMain />} />
          <Route exact path="/subjectForm" element={<SubjectForm />} />
          <Route exact path="/subjectsubmitted" element={<SubjectSubmitted />} />
          <Route exact path="/docsteacher" element={<UploadDocumentTeacher />} />
          <Route exact path="/teachingposts" element={<TeachingPosts />} />
          <Route exact path="/teachingdetails" element={<TeachingDetails />} />
          <Route exact path="/teachfulfilled" element={<TeachFulFilled />} />
          <Route exact path="/clothesdetailsmale" element={<ClothesDetailsMale />} />
          <Route exact path="/clothesdetails1" element={<ClothesDetails1 />} />
          <Route exact path="/clothesdetails4" element={<ClothesDetails4 />} />
          <Route exact path="/toysdetails1fem" element={<ToysDetails1fem />} />
          <Route exact path="/toysfem1" element={<ToysFem1 />} />
          <Route exact path="/toysmale4" element={<ToysMale4 />} />
          <Route exact path="/toysdetailsmale4" element={<ToysDetailsMale4 />} />
          <Route exact path="/toysstuffed" element={<ToysStuffed />} />
          <Route exact path="/toyssports" element={<ToysSports />} />
          <Route exact path="/toysstuffeddetails" element={<ToysStuffedDetails />} />
          <Route exact path="/toyssportsdetails" element={<ToysSportsDetails />} />
          <Route exact path="/foodfruits" element={<FoodFruits />} />
          <Route exact path="/foodvegetables" element={<FoodVegetables />} />
          <Route exact path="/foodcanned" element={<FoodCanned />} />
          <Route exact path="/foodfresh" element={<FoodFresh />} />
          <Route exact path="/foodbaked" element={<FoodBaked />} />
          <Route exact path="/foodfruitdetails" element={<FoodFruitDetails />} />
          <Route exact path="/foodvegetablesdetails" element={<FoodVegetablesDetails />} />
          <Route exact path="/foodcanneddetails" element={<FoodCannedDetails />} />
          <Route exact path="/foodfreshdetails" element={<FoodFreshDetails />} />
          <Route exact path="/foodbakeddetails" element={<FoodBakedDetails />} />
          <Route exact path="/Boardm" element={<Boardm />} />
          <Route exact path="/Boardmdetails" element={<Boardmdetails />} />
          <Route exact path="/stomMed" element={<StomMed />} />
          <Route exact path="/assistivedev" element={<AssistiveDev />} />
          <Route exact path="/medicaldevices" element={<MedicalDevices />} />
          <Route exact path="/medicalequipment" element={<MedicalEquipment />} />
          <Route exact path="/medications" element={<Medications />} />
          <Route exact path="/allmeds" element={<Allmeds />} />
          <Route exact path="/cotton" element={<Cotton />} />
          <Route exact path="/profileDonor" element={<ProfileDonor />} />
          <Route exact path="/medicaldetails2" element={< MedicalDetails2 />} />
          <Route exact path="/medicaldetails3" element={<MedicalDetails3 />} />
          <Route exact path="/bloodhos1" element={< BloodHos1 />} />
          <Route exact path="/outdoorpage2" element={< Outdoorpage2 />} />
          <Route exact path="/outdoordetails2" element={< Outdoordetails2 />} />
          <Route exact path="/pickup" element={< Pickup />} />
          <Route exact path="/popUpMap" element={< PopUpMap />} />
          <Route exact path="/teachingmath" element={< TeachingMath />} />
          <Route exact path="/casedetails2" element={< CaseDetails2 />} />
          <Route exact path="/surgery" element={< CaseSurgery />} />
          <Route exact path="/neurology" element={< Neurology />} />
          <Route exact path="/casedetails3" element={< CaseDetails3 />} />
          <Route exact path="/teachingenglish" element={< TeachingEnglish />} />
          <Route exact path="/teachingdetails2" element={< TeachingDetails3 />} />



          <Route path="/organization" element={<Home />} />
          <Route exact path='/Request' element={<Request />} />
          <Route exact path='/requestdone' element={<Requestdone />} />
          <Route exact path='/notify1' element={<NotificationOne />} />
          <Route exact path='/organization/fullfilled' element={<Fullfilled />} />
          <Route exact path='/fullfilleddetails' element={<Fulfiled />} />
          <Route exact path='/profileOrg' element={<ProfileOrg />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
