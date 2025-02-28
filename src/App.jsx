import React from 'react'
import './App.css'
import Card from './components/Card'
import huntingtonBeach from "./assets/huntington-beach.jpg";
import vailLake from "./assets/vail-lake.jpg";
import needles from "./assets/needles.jpg";
import lakeHemet from "./assets/lake-hemet.jpg";
import launchPointe from "./assets/launch-pointe.jpg";
import avilaPismo from "./assets/avila-pismo.jpg";
import williamHeise from "./assets/william-heise.jpg";
import dohenyBeach from "./assets/doheny-beach.jpg";
import cachuma from "./assets/cachuma.jpg";
import sugarloaf from "./assets/sugarloaf.jpg";
import orangeland from "./assets/orangeland.jpg";
import anaheimHarbor from "./assets/anaheim-harbor.jpg";



const App = () => {

  return (
    
    <div className="App">
      <title>Campgrounds</title>
      <h1>Campgrounds in Southern California</h1>
      <h2>Planning your next trip camping trip?  Check out these sites!</h2>
      <div className="card-container">
        <Card title="Huntington Beach RV Campground" description="Watch the sun set behind Huntington Beach pier." 
        link="https://www.hbrv.org/" image={huntingtonBeach} alt="Walkway in Huntington Beach with RV's lined up on the left side of it"/>
        <Card title="Vail Lake Resort" description="400 acres of pure wilderness and recreational fun near Temecula, CA." 
        link="https://www.vaillakeresort.com/" image={vailLake} alt="Family of 7 relaxing in front of their RV at Vail Lake in the sunset."/>
        <Card title="Needles Marina Resort" description="Off I-40 along the Colorado River, make this your next summer destination." 
        link="https://needlesmarinaresort.com/" image={needles} alt="Bird's eye view of Northern wing of Needles Marina Resort."/>
        <Card title="Lake Hemet Campground" description="Surrounded by the beautiful San Jacinto Mountains, check out this spot for beautiful views and a relaxing atmosphere."
        link="https://golakehemet.com/" image={lakeHemet} alt="Four chairs and a Tent posted near shore of Lake Hemet on a bright sunny day."/>
        <Card title="Launch Pointe RV Park" description="Located along the shore of Lake Elsinore, this spot is perfect for RV enthusiasts and lake junkies alike" 
        link="https://launch-pointe.com/" image={launchPointe} alt="The Bobber bait shop in Launch Pointe RV park surrounded by palm trees on a sunny day"/>
        <Card title="Avila Pismo RV Resort" description="Travelers can experience a relaxing gataway near Avila Beach." 
        link="https://www.avilapismorv.com/" image={avilaPismo} alt="Avila Pismo Resort sign in front of two white mobile homes"/>
        <Card title="William Heise County Park" description="In the beautiful small town of Julian, this park offers the entire wilderness package, from quiet meadows to its winter snows." 
        link="https://www.sdparks.org/content/sdparks/en/park-pages/WilliamHeise.html" image={williamHeise} alt="Two white RV's parked near roadway in William Heise County Park"/>
        <Card title="Doheny State Beach Campground" description="Off of Pacific Coast Highway, this campground allows campers to take in the California Sun and ocean breeze." 
        link="https://www.parks.ca.gov/?page_id=645" image={dohenyBeach} alt="Dozens of RVs parked along Doheny Beach in the sunset."/>
        <Card title="Cachuma Lake Campground" description="Along the shores of Lake Cachuma near Santa Barbara." 
        link="https://www.countyofsb.org/637/Cachuma-Lake" image={cachuma} alt="Tan hut overlooking Lake Cachuma shore on a sunny day."/>
        <Card title="Sugarloaf Ridge State Park" description="In the heart of Sonoma County, this site offers three glamping sites and tent rental if you need an extra tent." 
        link="https://sugarloafpark.org/activities/camping/?utm_source=google&utm_medium=cpc&gad_source=1&gclid=CjwKCAiAt4C-BhBcEiwA8Kp0Cfi4rWbSQQ-0X1joeXf-UDKfceT5hKfpn3LrSfiRzXsm3JjRDx0SlRoCTGIQAvD_BwE"
        image={sugarloaf} alt="Tents pitched beneath trees in Sugarloaf park."/>
        <Card title="Orangeland RV Park" description="Park your RV here and visit Orange County's finest attractions."
        link="https://www.orangeland.com/?utm_source=omg-gbp&utm_medium=webclick" image={orangeland} alt="Line of RVs parked in Orangeland RV Park"/>
        <Card title="Anaheim Harbor RV Park" description="No site is closer to the magic and wonders of Disneyland than this one." 
        link="https://anaheimharborrvpark.com/" image={anaheimHarbor} alt="Disneyland firework show at night in Anaheim Harbor RV Park"/>
      </div>
      
    </div>
    
  );
}

export default App
