<template>
  <section id="journey" class="min-h-[100vh] py-16 bg-cream">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-16 text-center text-slate-800">My Journey</h2>
      
      <div class="max-w-5xl mx-auto relative">
        <div class="timeline-bar" data-aos="fade-in" data-aos-duration="500"></div>
        
        <div class="timeline-items">

          <div class="diamond-wrapper top" data-aos="zoom-in" data-aos-delay="50">
            <div class="timeline-diamond top"></div>
          </div>

          <div class="timeline-item right" data-aos="fade-left" data-aos-delay="200">
            <div class="timeline-diamond" data-aos="zoom-in" data-aos-delay="100"></div>
            <div class="timeline-content">
              <div class="timeline-connector"></div>
              <div class="bg-white p-6 diagonal-card shadow-md">
                <h3 class="text-xl font-bold mb-2 text-slate-800">August 2025</h3>
                <h4 class="text-lg font-semibold mb-2 text-slate-700">Looking for Opportunities</h4>
                <p class="text-slate-600">Looking to start my career and gain practical experience in the tech/finance industry.</p>
              </div>
            </div>
          </div>
          
          <div class="timeline-item left" data-aos="fade-right" data-aos-delay="250">
            <div class="timeline-diamond" data-aos="zoom-in" data-aos-delay="150"></div>
            <div class="timeline-content">
              <div class="timeline-connector"></div>
              <div class="bg-white p-6 diagonal-card shadow-md">
                <h3 class="text-xl font-bold mb-2 text-slate-800">2022 - 2025</h3>
                <h4 class="text-lg font-semibold mb-2 text-slate-700">Graduated University</h4>
                <p class="text-slate-600">Graduated with a BSc in Computer Science with honours from Swansea University with a 2:1 achieved.</p>
              </div>
            </div>
          </div>
          
          <div class="timeline-item right" data-aos="fade-left" data-aos-delay="200">
            <div class="timeline-diamond" data-aos="zoom-in" data-aos-delay="100"></div>
            <div class="timeline-content">
              <div class="timeline-connector"></div>
              <div class="bg-white p-6 diagonal-card shadow-md">
                <h3 class="text-xl font-bold mb-2 text-slate-800">2022</h3>
                <h4 class="text-lg font-semibold mb-2 text-slate-700">Applied to University</h4>
                <p class="text-slate-600">Applied to Universities to pursue a career in Computer Science, ultimately deciding to go to Swansea University.</p>
              </div>
            </div>
          </div>
          
          <div class="timeline-item left" data-aos="fade-right" data-aos-delay="250">
            <div class="timeline-diamond" data-aos="zoom-in" data-aos-delay="150"></div>
            <div class="timeline-content">
              <div class="timeline-connector"></div>
              <div class="bg-white p-6 diagonal-card shadow-md">
                <h3 class="text-xl font-bold mb-2 text-slate-800">2020 - 2022</h3>
                <h4 class="text-lg font-semibold mb-2 text-slate-700">A Level Computer Science</h4>
                <p class="text-slate-600">Pick Computer Science as one of my A Level subjects, igniting my passion for programming and desire to learn more.</p>
              </div>
            </div>
          </div>
          
          <div class="timeline-item right" data-aos="fade-left" data-aos-delay="300">
            <div class="timeline-diamond" data-aos="zoom-in" data-aos-delay="200"></div>
            <div class="timeline-content">
              <div class="timeline-connector"></div>
              <div class="bg-white p-6 diagonal-card shadow-md">
                <h3 class="text-xl font-bold mb-2 text-slate-800">2015</h3>
                <h4 class="text-lg font-semibold mb-2 text-slate-700">First Website</h4>
                <p class="text-slate-600">In a year 7 IT class, I created my first website using HTML.</p>
              </div>
            </div>
          </div>
          
          <div class="diamond-wrapper bottom" data-aos="zoom-in" data-aos-delay="300">
            <div class="timeline-diamond bottom"></div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.timeline-bar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background-color: #475569;
  z-index: 10;
}

.timeline-items {
  position: relative;
  padding: 20px 0;
}

.timeline-item {
  position: relative;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  min-height: 80px;
}

.timeline-diamond {
  position: absolute;
  left: calc(50% + 2px);
  transform: translateX(-50%) rotate(45deg);
  width: 20px;
  height: 20px;
  background-color: #475569;
  z-index: 20;
}

.diamond-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
}

.diamond-wrapper.top {
  top: -30px;
}

.timeline-diamond.bottom {
  width: 30px;
  height: 30px;
}

.timeline-diamond.top {
  width: 30px;
  height: 30px;
}

.timeline-content {
  position: relative;
  width: 42%;
  z-index: 15;
}

.timeline-connector {
  position: absolute;
  top: 50%;
  width: 30px;
  height: 3px;
  background-color: #475569;
  transform: translateY(-50%);
}

.timeline-item.right .timeline-content {
  margin-left: auto;
  margin-right: 30px;
}

.timeline-item.right .timeline-connector {
  left: -30px;
}

.timeline-item.left .timeline-content {
  margin-right: auto;
  margin-left: 30px;
}

.timeline-item.left .timeline-connector {
  right: -33px;
  width: 33px;
}

.timeline-item.right .timeline-diamond {
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  left: calc(50% + 2px);
}

.timeline-item.left .timeline-diamond {
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  left: calc(50% + 2px);
}


.diagonal-card {
  position: relative;
  background-color: white;
  clip-path: polygon(
    10px 0,              
    calc(100% - 10px) 0,  
    100% 10px,           
    100% calc(100% - 10px), 
    calc(100% - 10px) 100%, 
    10px 100%,           
    0 calc(100% - 10px),   
    0 10px                
  );
  border: none;
}


.diagonal-card::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  background-color: lightgreen; 
  z-index: -1;
  clip-path: polygon(
    13px 0,                
    calc(100% - 7px) 0,   
    100% 13px,           
    100% calc(100% - 7px), 
    calc(100% - 7px) 100%, 
    13px 100%,            
    0 calc(100% - 7px),   
    0 13px                
  );
}
</style>