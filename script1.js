/**
 * Kids Island Kindergarten — Main JavaScript
 * Features: Loading screen, Hero slider, Sticky nav, Hamburger menu,
 * Gallery filter, Form validation, Scroll animations, Testimonials slider,
 * FAQ accordion, Scroll-to-top, Newsletter, Active nav links,
 * AR/EN Language Toggle with RTL support
 */

'use strict';

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const translations = {
  en: {
    brand: 'Kids Island',
    // Nav
    nav_home: 'Home',
    nav_about: 'About',
    nav_programs: 'Programs',
    nav_gallery: 'Gallery',
    nav_admission: 'Admission',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    nav_enroll: 'Enroll Now',
    // Hero slide 1
    hero1_badge: '&#127775; Admissions Open 2025\u20132026',
    hero1_title: 'Where Every Child<br /><span class="hero-title-accent">Shines Bright</span>',
    hero1_subtitle: 'A nurturing, joyful environment where curiosity blooms and little minds grow through play, creativity, and love.',
    hero1_btn1: 'Apply Now',
    hero1_btn2: 'Learn More',
    // Hero slide 2
    hero2_badge: '&#127807; Play-Based Learning',
    hero2_title: 'Learning Through<br /><span class="hero-title-accent" style="color:#2e7d32;">Play &amp; Discovery</span>',
    hero2_subtitle: 'Our innovative curriculum blends structured learning with imaginative play, helping children develop essential life skills naturally.',
    hero2_btn1: 'Explore Programs',
    hero2_btn2: 'View Gallery',
    // Hero slide 3
    hero3_badge: '&#10084; Safe &amp; Caring Environment',
    hero3_title: 'A Safe Place to<br /><span class="hero-title-accent" style="color:#c2185b;">Grow &amp; Thrive</span>',
    hero3_subtitle: 'We provide a warm, secure, and stimulating environment where every child feels loved, valued, and excited to learn every day.',
    hero3_btn1: 'Join Our Family',
    hero3_btn2: 'Contact Us',
    // Stats
    stat1: 'Happy Kids',
    stat2: 'Expert Teachers',
    stat3: 'Years of Joy',
    stat4: 'Student Ratio',
    stat5: 'Activities Daily',
    stat6: 'Parent Satisfaction',
    stat7: '24/7 Security',
    stat8: 'Certified Staff',
    stat9: 'Rated School',
    // About
    about_tag: '&#127968; Our Story',
    about_title: 'About Kids Island',
    about_subtitle: 'Founded in 2009, we have been nurturing young minds and hearts for over 15 years, creating a foundation for lifelong learning.',
    badge1_title: 'Award Winning',
    badge1_sub: 'Best Kindergarten 2024',
    badge2_title: '500+ Families',
    badge2_sub: 'Trust Us Every Year',
    about_heading: 'Nurturing Tomorrow\'s Leaders Since 2009',
    about_p1: 'At Kids Island, we believe every child is unique and deserves an education that celebrates their individuality. Our dedicated team of certified educators creates a warm, stimulating environment where children aged 2\u20136 can explore, discover, and grow.',
    about_p2: 'Our holistic approach combines academic readiness with social-emotional development, ensuring your child is prepared not just for school, but for life. We partner closely with families to support each child\'s journey.',
    mission_title: 'Our Mission',
    mission_text: 'To inspire a lifelong love of learning through joyful, child-centered education.',
    vision_title: 'Our Vision',
    vision_text: 'A world where every child reaches their full potential with confidence and curiosity.',
    feat1: 'Certified Educators',
    feat2: 'Safe Environment',
    feat3: 'Nutritious Meals',
    feat4: 'Parent Portal',
    feat5: 'Small Class Sizes',
    feat6: 'After-School Care',
    about_cta: 'Start Your Journey',
    // Feature cards
    fc1_title: 'Expert Teachers',
    fc1_text: 'All our educators hold early childhood education degrees and undergo continuous professional development training.',
    fc2_title: 'Outdoor Learning',
    fc2_text: 'Our spacious outdoor playground and garden encourage physical development, nature exploration, and teamwork.',
    fc3_title: 'Creative Arts',
    fc3_text: 'Daily art, music, and drama activities foster creativity, self-expression, and fine motor skill development.',
    fc4_title: 'Early Literacy',
    fc4_text: 'Our phonics-based reading program and rich library environment build strong language and literacy foundations.',
    fc5_title: 'STEM Activities',
    fc5_text: 'Age-appropriate science, technology, engineering, and math activities spark curiosity and problem-solving skills.',
    fc6_title: 'Social-Emotional',
    fc6_text: 'We prioritize emotional intelligence, empathy, and social skills to help children build meaningful relationships.',
    // Programs
    prog_tag: '&#127775; Our Programs',
    prog_title: 'Programs Designed for Every Stage',
    prog_subtitle: 'From toddlers to pre-schoolers, our age-appropriate programs support every milestone of your child\'s early development.',
    p1_age: 'Ages 2\u20133',
    p1_name: 'Toddler Explorers',
    p1_desc: 'A gentle introduction to group learning. Toddlers explore sensory play, basic language, and social interaction in a nurturing setting.',
    p1_f1: 'Sensory Play &amp; Discovery',
    p1_f2: 'Music &amp; Movement',
    p1_f3: 'Story Time &amp; Language',
    p1_f4: 'Art &amp; Craft Basics',
    p1_f5: 'Outdoor Exploration',
    p1_schedule: '&#128336; Mon\u2013Fri: 8:00 AM \u2013 12:00 PM',
    p2_age: 'Ages 3\u20134',
    p2_name: 'Junior Learners',
    p2_desc: 'Building confidence and curiosity through structured play, early literacy, numeracy, and creative expression in a vibrant classroom.',
    p2_f1: 'Pre-Reading &amp; Phonics',
    p2_f2: 'Number Concepts',
    p2_f3: 'Science Experiments',
    p2_f4: 'Drama &amp; Role Play',
    p2_f5: 'Physical Education',
    p2_schedule: '&#128336; Mon\u2013Fri: 8:00 AM \u2013 2:00 PM',
    p3_age: 'Ages 4\u20135',
    p3_name: 'Pre-School Stars',
    p3_desc: 'Preparing children for primary school with advanced literacy, mathematics, critical thinking, and collaborative learning skills.',
    p3_f1: 'Reading &amp; Writing',
    p3_f2: 'Math Foundations',
    p3_f3: 'STEM Projects',
    p3_f4: 'Social Studies',
    p3_f5: 'Computer Basics',
    p3_schedule: '&#128336; Mon\u2013Fri: 8:00 AM \u2013 3:00 PM',
    p4_age: 'Ages 5\u20136',
    p4_name: 'Kindergarten Ready',
    p4_desc: 'Our flagship school-readiness program ensures children transition to primary school with confidence, skills, and a love of learning.',
    p4_f1: 'Advanced Literacy',
    p4_f2: 'Problem Solving',
    p4_f3: 'Leadership Skills',
    p4_f4: 'Digital Literacy',
    p4_f5: 'School Transition Support',
    p4_schedule: '&#128336; Mon\u2013Fri: 8:00 AM \u2013 3:30 PM',
    most_popular: 'Most Popular',
    enroll_now: 'Enroll Now',
    extra_title: 'Additional Programs &amp; Services',
    ep1_title: 'After-School Care',
    ep1_text: 'Extended care until 6:00 PM with supervised activities, snacks, and homework help.',
    ep2_title: 'Music &amp; Dance',
    ep2_text: 'Weekly music lessons and dance classes with professional instructors for all ages.',
    ep3_title: 'Sports &amp; Fitness',
    ep3_text: 'Age-appropriate sports activities promoting physical health, coordination, and teamwork.',
    ep4_title: 'Language Classes',
    ep4_text: 'Introduction to a second language through songs, games, and interactive storytelling.',
    // Gallery
    gal_tag: '&#128247; Our Gallery',
    gal_title: 'Moments of Joy &amp; Learning',
    gal_subtitle: 'A glimpse into the wonderful world of Kids Island \u2014 where every day is an adventure filled with laughter and discovery.',
    gf_all: 'All',
    gf_activities: 'Activities',
    gf_classroom: 'Classroom',
    gf_outdoor: 'Outdoor',
    gf_events: 'Events',
    gi1_title: 'Art &amp; Craft Day',
    gi2_title: 'Music &amp; Dance',
    gi3_title: 'Science Experiments',
    gi4_title: 'Story Time',
    gi5_title: 'Learning Together',
    gi6_title: 'Math Games',
    gi7_title: 'Playground Fun',
    gi8_title: 'Garden Exploration',
    gi9_title: 'Sports Day',
    gi10_title: 'Annual Day Celebration',
    gi11_title: 'Graduation Ceremony',
    gi12_title: 'Harvest Festival',
    // Testimonials
    test_tag: '&#128149; Parent Stories',
    test_title: 'What Our Families Say',
    test_subtitle: 'Hear from the parents who trust us with their most precious little ones every day.',
    t1_text: 'Kids Island has been an absolute blessing for our family. Our daughter Emma went from being shy and hesitant to a confident, curious little girl who can\'t wait to go to school every morning. The teachers are incredibly caring and professional.',
    t1_name: 'Sarah Johnson',
    t1_role: 'Mother of Emma, Age 4',
    t2_text: 'We were nervous about enrolling our son at such a young age, but the team at Kids Island made the transition seamless. The communication with parents is excellent \u2014 we always know what our child is learning and how he\'s progressing.',
    t2_name: 'Michael &amp; Lisa Chen',
    t2_role: 'Parents of Oliver, Age 3',
    t3_text: 'The curriculum at Kids Island is outstanding. My daughter Aisha has learned so much \u2014 reading, counting, painting, and most importantly, how to be kind and share with others. The school truly develops the whole child, not just academics.',
    t3_name: 'Fatima Al-Hassan',
    t3_role: 'Mother of Aisha, Age 5',
    t4_text: 'After visiting several kindergartens, Kids Island stood out immediately. The facilities are clean and safe, the teachers are warm and attentive, and the learning environment is truly magical. Our twins absolutely love it here!',
    t4_name: 'David &amp; Rachel Park',
    t4_role: 'Parents of Twins, Age 4',
    t5_text: 'The after-school program has been a lifesaver for our busy family. The staff are wonderful, the activities are engaging, and our son comes home happy and fulfilled every day. We couldn\'t be more grateful for Kids Island.',
    t5_name: 'Amanda Torres',
    t5_role: 'Mother of Lucas, Age 5',
    // CTA
    cta_title: 'Ready to Give Your Child the Best Start?',
    cta_subtitle: 'Join our Kids Island family today. Limited spots available for the 2025\u20132026 academic year. Don\'t miss out on this opportunity to give your child a bright future.',
    cta_btn1: 'Apply for Admission',
    cta_btn2: 'Schedule a Visit',
    cta_t1: '&#9989; No Registration Fee',
    cta_t2: '&#9989; Free Trial Day',
    cta_t3: '&#9989; Flexible Payment Plans',
    // Admission
    adm_tag: '&#128196; Admission',
    adm_title: 'Apply for Admission',
    adm_subtitle: 'Fill out the form below to begin your child\'s journey at Kids Island. Our admissions team will contact you within 24 hours.',
    adm_why: 'Why Choose Kids Island?',
    adm_i1_title: 'Flexible Timings',
    adm_i1_text: 'Half-day and full-day options available to suit your family\'s schedule.',
    adm_i2_title: 'Affordable Fees',
    adm_i2_text: 'Competitive pricing with flexible payment plans and sibling discounts.',
    adm_i3_title: 'Simple Process',
    adm_i3_text: 'Easy online application with quick response from our admissions team.',
    adm_i4_title: 'Open House',
    adm_i4_text: 'Visit us every Saturday 9 AM\u201312 PM to tour our facilities and meet our teachers.',
    // Form labels
    form_child_info: 'Child\'s Information',
    lbl_child_name: 'Child\'s Full Name',
    ph_child_name: 'Enter child\'s full name',
    lbl_dob: 'Date of Birth',
    lbl_gender: 'Gender',
    opt_select_gender: 'Select gender',
    opt_male: 'Male',
    opt_female: 'Female',
    opt_other: 'Prefer not to say',
    lbl_program: 'Preferred Program',
    opt_select_prog: 'Select a program',
    opt_p1: 'Toddler Explorers (Ages 2\u20133)',
    opt_p2: 'Junior Learners (Ages 3\u20134)',
    opt_p3: 'Pre-School Stars (Ages 4\u20135)',
    opt_p4: 'Kindergarten Ready (Ages 5\u20136)',
    form_parent_info: 'Parent / Guardian Information',
    lbl_parent_name: 'Parent / Guardian Name',
    ph_parent_name: 'Enter your full name',
    lbl_phone: 'Phone Number',
    lbl_email: 'Email Address',
    lbl_address: 'Home Address',
    ph_address: 'Street, City, State',
    lbl_how_heard: 'How did you hear about us?',
    opt_select_option: 'Select an option',
    opt_friend: 'Friend / Family Referral',
    opt_google: 'Google Search',
    opt_social: 'Social Media',
    opt_flyer: 'Flyer / Brochure',
    opt_other2: 'Other',
    lbl_notes: 'Additional Notes / Special Requirements',
    ph_notes: 'Any allergies, special needs, or questions you\'d like to share with us...',
    lbl_terms: 'I agree to the <a href="#" class="form-link">Terms &amp; Conditions</a> and <a href="#" class="form-link">Privacy Policy</a>',
    btn_submit: 'Submit Application',
    success_title: 'Application Submitted!',
    success_text: 'Thank you for applying to Kids Island! Our admissions team will review your application and contact you within 24 hours.',
    success_text2: 'We look forward to welcoming your child to our family! &#127775;',
    btn_new_app: 'Submit Another Application',
    // FAQ
    faq_tag: '&#10067; FAQ',
    faq_title: 'Frequently Asked Questions',
    faq_subtitle: 'Everything you need to know about Kids Island. Can\'t find your answer? Contact us directly.',
    faq1_q: 'What are the age requirements for enrollment?',
    faq1_a: 'We welcome children aged 2 to 6 years old. Our Toddler Explorers program starts at age 2, and our Kindergarten Ready program serves children up to age 6. Children must be the minimum age by September 1st of the enrollment year.',
    faq2_q: 'What are your school hours?',
    faq2_a: 'Our regular school hours are Monday to Friday, 8:00 AM to 3:30 PM. We also offer an extended after-school care program from 3:30 PM to 6:00 PM for families who need additional coverage. Early drop-off is available from 7:30 AM.',
    faq3_q: 'What is the teacher-to-student ratio?',
    faq3_a: 'We maintain a low teacher-to-student ratio to ensure every child receives individual attention. For toddlers (ages 2\u20133), the ratio is 1:6. For older children (ages 3\u20136), the ratio is 1:8. Each classroom also has a dedicated teaching assistant.',
    faq4_q: 'Do you provide meals and snacks?',
    faq4_a: 'Yes! We provide nutritious, freshly prepared morning snacks and lunch for all full-day students. Our menu is designed by a certified nutritionist and accommodates common allergies and dietary restrictions. Parents receive the weekly menu in advance. Half-day students receive a morning snack.',
    faq5_q: 'What curriculum do you follow?',
    faq5_a: 'We follow a play-based, child-centered curriculum aligned with early childhood education best practices. Our approach integrates elements of the Reggio Emilia philosophy, Montessori principles, and structured academic preparation. We focus on literacy, numeracy, social-emotional development, creativity, and physical development.',
    faq6_q: 'How do you handle children with special needs?',
    faq6_a: 'We are committed to inclusive education. Our staff includes trained special education specialists who work with children with diverse learning needs. We develop individualized learning plans (ILPs) for children who require additional support and maintain close communication with families and external therapists.',
    faq7_q: 'What safety measures are in place?',
    faq7_a: 'Child safety is our top priority. Our campus features 24/7 CCTV surveillance, secure entry systems with keycard access, trained first-aid staff on site at all times, regular fire and emergency drills, strict visitor protocols, and a comprehensive child protection policy. All staff undergo thorough background checks.',
    faq8_q: 'How do you communicate with parents?',
    faq8_a: 'We believe in transparent, regular communication with families. We use our dedicated parent portal app for daily updates, photos, and progress reports. We also hold monthly parent-teacher meetings, send weekly newsletters, and maintain an open-door policy for parents who wish to speak with teachers or the principal.',
    faq9_q: 'What are the tuition fees?',
    faq9_a: 'Tuition varies by program and schedule. Half-day programs start from $650/month, and full-day programs from $950/month. We offer a 10% sibling discount and flexible monthly or quarterly payment plans. Financial assistance may be available for qualifying families. Contact our admissions office for a detailed fee schedule.',
    faq10_q: 'Can I visit the school before enrolling?',
    faq10_a: 'Absolutely! We encourage all prospective families to visit our campus. We host Open House events every Saturday from 9:00 AM to 12:00 PM during the school year. You can also schedule a private tour on weekdays by contacting our admissions office. We also offer a free trial day for enrolled children before the school year begins.',
    // Contact
    con_tag: '&#128222; Contact Us',
    con_title: 'Get in Touch',
    con_subtitle: 'We\'d love to hear from you. Reach out with any questions, and our friendly team will respond promptly.',
    con_info_title: 'Contact Information',
    con_address_label: 'Address',
    con_address_val: '123 Sunshine Boulevard<br />Maplewood, CA 90210',
    con_phone_label: 'Phone',
    con_email_label: 'Email',
    con_hours_label: 'Office Hours',
    con_hours_val: 'Mon\u2013Fri: 7:30 AM \u2013 6:00 PM<br />Sat: 9:00 AM \u2013 12:00 PM',
    con_follow: 'Follow Us',
    map_link: 'Open in Google Maps &#8599;',
    con_form_title: 'Send Us a Message',
    lbl_your_name: 'Your Name',
    ph_your_name: 'John Smith',
    lbl_subject: 'Subject',
    opt_select_subject: 'Select a subject',
    opt_sub1: 'Admission Inquiry',
    opt_sub2: 'Program Information',
    opt_sub3: 'Schedule a Tour',
    opt_sub4: 'Fees &amp; Payment',
    lbl_message: 'Message',
    ph_message: 'Write your message here...',
    btn_send: 'Send Message',
    con_success_title: 'Message Sent!',
    con_success_text: 'Thank you for reaching out! We\'ll get back to you within 24 hours.',
    btn_new_msg: 'Send Another Message',
    // Footer
    footer_tagline: 'Where Every Child Shines Bright',
    footer_desc: 'Nurturing young minds and hearts since 2009. We are committed to providing the highest quality early childhood education in a safe, loving environment.',
    footer_quick_links: 'Quick Links',
    footer_about_us: 'About Us',
    footer_contact_info: 'Contact Info',
    footer_newsletter: 'Newsletter',
    ph_newsletter: 'Your email address',
    footer_copy: '&copy; 2025 Kids Island. All rights reserved.',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Service',
    footer_sitemap: 'Sitemap',
    fp1: 'Toddler Explorers (2\u20133)',
    fp2: 'Junior Learners (3\u20134)',
    fp3: 'Pre-School Stars (4\u20135)',
    fp4: 'Kindergarten Ready (5\u20136)',
  },

  ar: {
    brand: 'جزيرة الأطفال',
    // Nav
    nav_home: 'الرئيسية',
    nav_about: 'عن المدرسة',
    nav_programs: 'البرامج',
    nav_gallery: 'المعرض',
    nav_admission: 'التسجيل',
    nav_faq: 'الأسئلة الشائعة',
    nav_contact: 'اتصل بنا',
    nav_enroll: 'سجّل الآن',
    // Hero slide 1
    hero1_badge: '&#127775; التسجيل مفتوح 2025\u20132026',
    hero1_title: 'حيث يتألق كل طفل<br /><span class="hero-title-accent">ويشع بالنور</span>',
    hero1_subtitle: 'بيئة مشرقة وممتعة تتفتح فيها الفضول وتنمو العقول الصغيرة من خلال اللعب والإبداع والمحبة.',
    hero1_btn1: 'قدّم الآن',
    hero1_btn2: 'اعرف أكثر',
    // Hero slide 2
    hero2_badge: '&#127807; التعلم القائم على اللعب',
    hero2_title: 'التعلم من خلال<br /><span class="hero-title-accent" style="color:#2e7d32;">اللعب والاكتشاف</span>',
    hero2_subtitle: 'يمزج منهجنا المبتكر بين التعلم المنظم واللعب الإبداعي، مما يساعد الأطفال على تطوير مهارات الحياة الأساسية بشكل طبيعي.',
    hero2_btn1: 'استكشف البرامج',
    hero2_btn2: 'شاهد المعرض',
    // Hero slide 3
    hero3_badge: '&#10084; بيئة آمنة وعطوفة',
    hero3_title: 'مكان آمن<br /><span class="hero-title-accent" style="color:#c2185b;">للنمو والازدهار</span>',
    hero3_subtitle: 'نوفر بيئة دافئة وآمنة ومحفزة يشعر فيها كل طفل بالحب والتقدير والشغف بالتعلم كل يوم.',
    hero3_btn1: 'انضم لعائلتنا',
    hero3_btn2: 'تواصل معنا',
    // Stats
    stat1: 'طفل سعيد',
    stat2: 'معلم متخصص',
    stat3: 'سنوات من الفرح',
    stat4: 'نسبة الطلاب',
    stat5: 'نشاط يومي',
    stat6: 'رضا الأهل',
    stat7: 'أمان على مدار الساعة',
    stat8: 'كادر معتمد',
    stat9: 'مدرسة مُقيَّمة',
    // About
    about_tag: '&#127968; قصتنا',
    about_title: 'عن جزيرة الأطفال',
    about_subtitle: 'تأسسنا عام 2009، ونرعى العقول والقلوب الصغيرة منذ أكثر من 15 عامًا، نبني أساسًا متينًا للتعلم مدى الحياة.',
    badge1_title: 'جائزة التميز',
    badge1_sub: 'أفضل روضة 2024',
    badge2_title: '+500 عائلة',
    badge2_sub: 'تثق بنا كل عام',
    about_heading: 'نرعى قادة الغد منذ عام 2009',
    about_p1: 'في جزيرة الأطفال، نؤمن بأن كل طفل فريد ويستحق تعليمًا يحتفي بتميزه. يخلق فريقنا من المعلمين المعتمدين بيئة دافئة ومحفزة يستطيع فيها الأطفال من عمر 2 إلى 6 سنوات الاستكشاف والاكتشاف والنمو.',
    about_p2: 'يجمع نهجنا الشامل بين الاستعداد الأكاديمي والنمو الاجتماعي والعاطفي، مما يضمن تهيئة طفلك ليس للمدرسة فحسب، بل للحياة. نتعاون مع الأسر عن كثب لدعم رحلة كل طفل.',
    mission_title: 'رسالتنا',
    mission_text: 'إلهام حب التعلم مدى الحياة من خلال تعليم مبهج يتمحور حول الطفل.',
    vision_title: 'رؤيتنا',
    vision_text: 'عالم يحقق فيه كل طفل إمكاناته الكاملة بثقة وفضول.',
    feat1: 'معلمون معتمدون',
    feat2: 'بيئة آمنة',
    feat3: 'وجبات صحية',
    feat4: 'بوابة الأهل',
    feat5: 'فصول صغيرة',
    feat6: 'رعاية بعد الدوام',
    about_cta: 'ابدأ رحلتك',
    // Feature cards
    fc1_title: 'معلمون متخصصون',
    fc1_text: 'جميع معلمينا يحملون شهادات في تعليم الطفولة المبكرة ويخضعون لتطوير مهني مستمر.',
    fc2_title: 'التعلم في الهواء الطلق',
    fc2_text: 'تشجع ملاعبنا الخارجية الفسيحة وحديقتنا على التطور الجسدي واستكشاف الطبيعة والعمل الجماعي.',
    fc3_title: 'الفنون الإبداعية',
    fc3_text: 'أنشطة الفن والموسيقى والمسرح اليومية تعزز الإبداع والتعبير عن الذات وتطوير المهارات الحركية الدقيقة.',
    fc4_title: 'محو الأمية المبكر',
    fc4_text: 'يبني برنامج القراءة الصوتية لدينا والبيئة المكتبية الغنية أسسًا قوية للغة والقراءة.',
    fc5_title: 'أنشطة العلوم والتقنية',
    fc5_text: 'أنشطة العلوم والتكنولوجيا والهندسة والرياضيات المناسبة للعمر تُشعل الفضول ومهارات حل المشكلات.',
    fc6_title: 'النمو الاجتماعي والعاطفي',
    fc6_text: 'نولي الأولوية للذكاء العاطفي والتعاطف والمهارات الاجتماعية لمساعدة الأطفال على بناء علاقات ذات معنى.',
    // Programs
    prog_tag: '&#127775; برامجنا',
    prog_title: 'برامج مصممة لكل مرحلة',
    prog_subtitle: 'من الأطفال الصغار إلى ما قبل المدرسة، تدعم برامجنا المناسبة للعمر كل مرحلة من مراحل نمو طفلك.',
    p1_age: 'أعمار 2\u20133',
    p1_name: 'مستكشفو الأطفال الصغار',
    p1_desc: 'مقدمة لطيفة للتعلم الجماعي. يستكشف الأطفال اللعب الحسي واللغة الأساسية والتفاعل الاجتماعي في بيئة رعاية.',
    p1_f1: 'اللعب الحسي والاكتشاف',
    p1_f2: 'الموسيقى والحركة',
    p1_f3: 'وقت القصة واللغة',
    p1_f4: 'أساسيات الفن والحرف',
    p1_f5: 'الاستكشاف في الهواء الطلق',
    p1_schedule: '&#128336; الاثنين\u2013الجمعة: 8:00 ص \u2013 12:00 م',
    p2_age: 'أعمار 3\u20134',
    p2_name: 'المتعلمون الصغار',
    p2_desc: 'بناء الثقة والفضول من خلال اللعب المنظم ومحو الأمية المبكر والحساب والتعبير الإبداعي في فصل دراسي نابض بالحياة.',
    p2_f1: 'القراءة المبكرة والصوتيات',
    p2_f2: 'مفاهيم الأرقام',
    p2_f3: 'تجارب علمية',
    p2_f4: 'المسرح ولعب الأدوار',
    p2_f5: 'التربية البدنية',
    p2_schedule: '&#128336; الاثنين\u2013الجمعة: 8:00 ص \u2013 2:00 م',
    p3_age: 'أعمار 4\u20135',
    p3_name: 'نجوم ما قبل المدرسة',
    p3_desc: 'إعداد الأطفال للمدرسة الابتدائية بمهارات القراءة والكتابة المتقدمة والرياضيات والتفكير النقدي والتعلم التعاوني.',
    p3_f1: 'القراءة والكتابة',
    p3_f2: 'أسس الرياضيات',
    p3_f3: 'مشاريع العلوم والتقنية',
    p3_f4: 'الدراسات الاجتماعية',
    p3_f5: 'أساسيات الحاسوب',
    p3_schedule: '&#128336; الاثنين\u2013الجمعة: 8:00 ص \u2013 3:00 م',
    p4_age: 'أعمار 5\u20136',
    p4_name: 'جاهز للروضة',
    p4_desc: 'يضمن برنامجنا الرائد للاستعداد المدرسي انتقال الأطفال إلى المدرسة الابتدائية بثقة ومهارات وحب للتعلم.',
    p4_f1: 'القراءة والكتابة المتقدمة',
    p4_f2: 'حل المشكلات',
    p4_f3: 'مهارات القيادة',
    p4_f4: 'محو الأمية الرقمية',
    p4_f5: 'دعم الانتقال المدرسي',
    p4_schedule: '&#128336; الاثنين\u2013الجمعة: 8:00 ص \u2013 3:30 م',
    most_popular: 'الأكثر شعبية',
    enroll_now: 'سجّل الآن',
    extra_title: 'برامج وخدمات إضافية',
    ep1_title: 'رعاية ما بعد الدوام',
    ep1_text: 'رعاية ممتدة حتى 6:00 م مع أنشطة مشرفة ووجبات خفيفة ومساعدة في الواجبات.',
    ep2_title: 'الموسيقى والرقص',
    ep2_text: 'دروس موسيقى أسبوعية وفصول رقص مع مدربين محترفين لجميع الأعمار.',
    ep3_title: 'الرياضة واللياقة',
    ep3_text: 'أنشطة رياضية مناسبة للعمر تعزز الصحة الجسدية والتنسيق والعمل الجماعي.',
    ep4_title: 'دروس اللغة',
    ep4_text: 'مقدمة للغة ثانية من خلال الأغاني والألعاب والقصص التفاعلية.',
    // Gallery
    gal_tag: '&#128247; معرضنا',
    gal_title: 'لحظات من الفرح والتعلم',
    gal_subtitle: 'لمحة من عالم جزيرة الأطفال الرائع \u2014 حيث كل يوم مغامرة مليئة بالضحكات والاكتشافات.',
    gf_all: 'الكل',
    gf_activities: 'الأنشطة',
    gf_classroom: 'الفصل الدراسي',
    gf_outdoor: 'الهواء الطلق',
    gf_events: 'الفعاليات',
    gi1_title: 'يوم الفن والحرف',
    gi2_title: 'الموسيقى والرقص',
    gi3_title: 'تجارب علمية',
    gi4_title: 'وقت القصة',
    gi5_title: 'التعلم معًا',
    gi6_title: 'ألعاب الرياضيات',
    gi7_title: 'متعة الملعب',
    gi8_title: 'استكشاف الحديقة',
    gi9_title: 'يوم الرياضة',
    gi10_title: 'احتفال اليوم السنوي',
    gi11_title: 'حفل التخرج',
    gi12_title: 'مهرجان الحصاد',
    // Testimonials
    test_tag: '&#128149; قصص الأهل',
    test_title: 'ماذا تقول عائلاتنا',
    test_subtitle: 'استمع إلى الآباء الذين يثقون بنا في رعاية أعز ما لديهم كل يوم.',
    t1_text: 'كانت جزيرة الأطفال نعمة حقيقية لعائلتنا. تحولت ابنتنا إيما من طفلة خجولة ومترددة إلى فتاة واثقة وفضولية لا تستطيع الانتظار للذهاب إلى المدرسة كل صباح. المعلمون يتسمون بالرعاية والاحترافية الفائقة.',
    t1_name: 'سارة جونسون',
    t1_role: 'والدة إيما، عمر 4 سنوات',
    t2_text: 'كنا قلقين من تسجيل ابننا في هذا العمر الصغير، لكن فريق جزيرة الأطفال جعل الانتقال سلسًا. التواصل مع الأهل ممتاز \u2014 نعرف دائمًا ما يتعلمه طفلنا وكيف يتقدم.',
    t2_name: 'مايكل وليزا تشن',
    t2_role: 'والدا أوليفر، عمر 3 سنوات',
    t3_text: 'المنهج في جزيرة الأطفال رائع. تعلمت ابنتي عائشة الكثير \u2014 القراءة والعد والرسم، والأهم كيف تكون لطيفة وتشارك الآخرين. المدرسة تنمي الطفل بشكل متكامل وليس أكاديميًا فقط.',
    t3_name: 'فاطمة الحسن',
    t3_role: 'والدة عائشة، عمر 5 سنوات',
    t4_text: 'بعد زيارة عدة روضات، تميزت جزيرة الأطفال فورًا. المرافق نظيفة وآمنة، والمعلمون دافئون ومنتبهون، وبيئة التعلم ساحرة حقًا. توأمانا يحبانها بشدة!',
    t4_name: 'ديفيد وراشيل بارك',
    t4_role: 'والدا التوأم، عمر 4 سنوات',
    t5_text: 'كان برنامج ما بعد الدوام منقذًا لعائلتنا المشغولة. الكادر رائع والأنشطة ممتعة وابننا يعود إلى المنزل سعيدًا ومكتفيًا كل يوم. لا يمكننا أن نكون أكثر امتنانًا لجزيرة الأطفال.',
    t5_name: 'أماندا توريس',
    t5_role: 'والدة لوكاس، عمر 5 سنوات',
    // CTA
    cta_title: 'هل أنت مستعد لمنح طفلك أفضل بداية؟',
    cta_subtitle: 'انضم إلى عائلة جزيرة الأطفال اليوم. أماكن محدودة للعام الدراسي 2025\u20132026. لا تفوّت هذه الفرصة لمنح طفلك مستقبلًا مشرقًا.',
    cta_btn1: 'تقدم للقبول',
    cta_btn2: 'جدول زيارة',
    cta_t1: '&#9989; بدون رسوم تسجيل',
    cta_t2: '&#9989; يوم تجريبي مجاني',
    cta_t3: '&#9989; خطط دفع مرنة',
    // Admission
    adm_tag: '&#128196; التسجيل',
    adm_title: 'التقدم للقبول',
    adm_subtitle: 'أكمل النموذج أدناه لبدء رحلة طفلك في جزيرة الأطفال. سيتواصل معك فريق القبول خلال 24 ساعة.',
    adm_why: 'لماذا تختار جزيرة الأطفال؟',
    adm_i1_title: 'أوقات مرنة',
    adm_i1_text: 'خيارات نصف يوم ويوم كامل متاحة لتناسب جدول عائلتك.',
    adm_i2_title: 'رسوم معقولة',
    adm_i2_text: 'أسعار تنافسية مع خطط دفع مرنة وخصومات للأشقاء.',
    adm_i3_title: 'إجراء بسيط',
    adm_i3_text: 'طلب إلكتروني سهل مع استجابة سريعة من فريق القبول.',
    adm_i4_title: 'يوم الأبواب المفتوحة',
    adm_i4_text: 'زورونا كل سبت من 9 ص إلى 12 م لجولة في مرافقنا ولقاء معلمينا.',
    // Form labels
    form_child_info: 'معلومات الطفل',
    lbl_child_name: 'الاسم الكامل للطفل',
    ph_child_name: 'أدخل الاسم الكامل للطفل',
    lbl_dob: 'تاريخ الميلاد',
    lbl_gender: 'الجنس',
    opt_select_gender: 'اختر الجنس',
    opt_male: 'ذكر',
    opt_female: 'أنثى',
    opt_other: 'أفضل عدم الإفصاح',
    lbl_program: 'البرنامج المفضل',
    opt_select_prog: 'اختر برنامجًا',
    opt_p1: 'مستكشفو الأطفال الصغار (أعمار 2\u20133)',
    opt_p2: 'المتعلمون الصغار (أعمار 3\u20134)',
    opt_p3: 'نجوم ما قبل المدرسة (أعمار 4\u20135)',
    opt_p4: 'جاهز للروضة (أعمار 5\u20136)',
    form_parent_info: 'معلومات ولي الأمر',
    lbl_parent_name: 'اسم ولي الأمر',
    ph_parent_name: 'أدخل اسمك الكامل',
    lbl_phone: 'رقم الهاتف',
    lbl_email: 'البريد الإلكتروني',
    lbl_address: 'العنوان المنزلي',
    ph_address: 'الشارع، المدينة، المنطقة',
    lbl_how_heard: 'كيف سمعت عنا؟',
    opt_select_option: 'اختر خيارًا',
    opt_friend: 'توصية من صديق / عائلة',
    opt_google: 'بحث جوجل',
    opt_social: 'وسائل التواصل الاجتماعي',
    opt_flyer: 'نشرة / كتيب',
    opt_other2: 'أخرى',
    lbl_notes: 'ملاحظات إضافية / متطلبات خاصة',
    ph_notes: 'أي حساسية أو احتياجات خاصة أو أسئلة تودّ مشاركتها معنا...',
    lbl_terms: 'أوافق على <a href="#" class="form-link">الشروط والأحكام</a> و<a href="#" class="form-link">سياسة الخصوصية</a>',
    btn_submit: 'إرسال الطلب',
    success_title: 'تم إرسال الطلب!',
    success_text: 'شكرًا لتقدمك إلى جزيرة الأطفال! سيراجع فريق القبول طلبك ويتواصل معك خلال 24 ساعة.',
    success_text2: 'نتطلع إلى الترحيب بطفلك في عائلتنا! &#127775;',
    btn_new_app: 'إرسال طلب آخر',
    // FAQ
    faq_tag: '&#10067; الأسئلة الشائعة',
    faq_title: 'الأسئلة المتكررة',
    faq_subtitle: 'كل ما تحتاج معرفته عن جزيرة الأطفال. لم تجد إجابتك؟ تواصل معنا مباشرة.',
    faq1_q: 'ما هي متطلبات العمر للتسجيل؟',
    faq1_a: 'نرحب بالأطفال من عمر 2 إلى 6 سنوات. يبدأ برنامج مستكشفي الأطفال الصغار من عمر 2، وبرنامج جاهز للروضة يخدم الأطفال حتى عمر 6. يجب أن يبلغ الطفل الحد الأدنى من العمر بحلول الأول من سبتمبر من سنة التسجيل.',
    faq2_q: 'ما هي ساعات الدوام؟',
    faq2_a: 'ساعات الدوام الرسمية من الاثنين إلى الجمعة، من 8:00 ص إلى 3:30 م. نقدم أيضًا برنامج رعاية ممتد بعد الدوام من 3:30 م إلى 6:00 م للعائلات التي تحتاج تغطية إضافية. الإيصال المبكر متاح من 7:30 ص.',
    faq3_q: 'ما هي نسبة المعلم إلى الطلاب؟',
    faq3_a: 'نحافظ على نسبة منخفضة من المعلم إلى الطلاب لضمان حصول كل طفل على اهتمام فردي. للأطفال الصغار (2\u20133 سنوات) النسبة 1:6. للأطفال الأكبر (3\u20136 سنوات) النسبة 1:8. كل فصل لديه أيضًا مساعد تدريس مخصص.',
    faq4_q: 'هل تقدمون وجبات ووجبات خفيفة؟',
    faq4_a: 'نعم! نقدم وجبات خفيفة صباحية وغداء طازجًا ومغذيًا لجميع طلاب اليوم الكامل. قائمة طعامنا مصممة من قبل أخصائي تغذية معتمد وتستوعب الحساسيات الشائعة والقيود الغذائية. يتلقى الأهل القائمة الأسبوعية مسبقًا. طلاب نصف اليوم يحصلون على وجبة خفيفة صباحية.',
    faq5_q: 'ما المنهج الذي تتبعونه؟',
    faq5_a: 'نتبع منهجًا قائمًا على اللعب ومتمحورًا حول الطفل يتوافق مع أفضل ممارسات تعليم الطفولة المبكرة. يدمج نهجنا عناصر من فلسفة ريجيو إيميليا ومبادئ مونتيسوري والإعداد الأكاديمي المنظم. نركز على القراءة والكتابة والحساب والنمو الاجتماعي والعاطفي والإبداع والتطور الجسدي.',
    faq6_q: 'كيف تتعاملون مع الأطفال ذوي الاحتياجات الخاصة؟',
    faq6_a: 'نحن ملتزمون بالتعليم الشامل. يضم كادرنا متخصصين في التربية الخاصة يعملون مع الأطفال ذوي احتياجات التعلم المتنوعة. نضع خططًا تعليمية فردية للأطفال الذين يحتاجون دعمًا إضافيًا ونحافظ على تواصل وثيق مع الأسر والمعالجين الخارجيين.',
    faq7_q: 'ما هي إجراءات السلامة المتبعة؟',
    faq7_a: 'سلامة الطفل هي أولويتنا القصوى. يتميز حرمنا بمراقبة CCTV على مدار الساعة وأنظمة دخول آمنة ببطاقات الوصول وكادر إسعافات أولية مدرب في الموقع دائمًا وتدريبات منتظمة على الحرائق والطوارئ وبروتوكولات صارمة للزوار وسياسة شاملة لحماية الطفل. يخضع جميع الكادر لفحوصات خلفية شاملة.',
    faq8_q: 'كيف تتواصلون مع الأهل؟',
    faq8_a: 'نؤمن بالتواصل الشفاف والمنتظم مع الأسر. نستخدم تطبيق بوابة الأهل المخصص للتحديثات اليومية والصور وتقارير التقدم. نعقد أيضًا اجتماعات شهرية بين الأهل والمعلمين ونرسل نشرات أسبوعية ونحافظ على سياسة الباب المفتوح للأهل الراغبين في التحدث مع المعلمين أو المدير.',
    faq9_q: 'ما هي الرسوم الدراسية؟',
    faq9_a: 'تتفاوت الرسوم حسب البرنامج والجدول. تبدأ برامج نصف اليوم من 650 دولارًا/شهريًا وبرامج اليوم الكامل من 950 دولارًا/شهريًا. نقدم خصم 10% للأشقاء وخطط دفع شهرية أو ربع سنوية مرنة. قد تتوفر مساعدة مالية للعائلات المؤهلة. تواصل مع مكتب القبول للحصول على جدول رسوم مفصل.',
    faq10_q: 'هل يمكنني زيارة المدرسة قبل التسجيل؟',
    faq10_a: 'بالتأكيد! نشجع جميع الأسر المحتملة على زيارة حرمنا. نستضيف فعاليات الأبواب المفتوحة كل سبت من 9:00 ص إلى 12:00 م خلال العام الدراسي. يمكنك أيضًا جدولة جولة خاصة في أيام الأسبوع بالتواصل مع مكتب القبول. نقدم أيضًا يومًا تجريبيًا مجانيًا للأطفال المسجلين قبل بدء العام الدراسي.',
    // Contact
    con_tag: '&#128222; اتصل بنا',
    con_title: 'تواصل معنا',
    con_subtitle: 'يسعدنا سماعك. تواصل معنا بأي أسئلة وسيرد فريقنا الودود بسرعة.',
    con_info_title: 'معلومات التواصل',
    con_address_label: 'العنوان',
    con_address_val: '123 شارع صن شاين<br />مابلوود، كاليفورنيا 90210',
    con_phone_label: 'الهاتف',
    con_email_label: 'البريد الإلكتروني',
    con_hours_label: 'ساعات العمل',
    con_hours_val: 'الاثنين\u2013الجمعة: 7:30 ص \u2013 6:00 م<br />السبت: 9:00 ص \u2013 12:00 م',
    con_follow: 'تابعنا',
    map_link: 'افتح في خرائط جوجل &#8599;',
    con_form_title: 'أرسل لنا رسالة',
    lbl_your_name: 'اسمك',
    ph_your_name: 'محمد أحمد',
    lbl_subject: 'الموضوع',
    opt_select_subject: 'اختر موضوعًا',
    opt_sub1: 'استفسار عن القبول',
    opt_sub2: 'معلومات البرامج',
    opt_sub3: 'جدولة جولة',
    opt_sub4: 'الرسوم والدفع',
    lbl_message: 'الرسالة',
    ph_message: 'اكتب رسالتك هنا...',
    btn_send: 'إرسال الرسالة',
    con_success_title: 'تم إرسال الرسالة!',
    con_success_text: 'شكرًا لتواصلك معنا! سنرد عليك خلال 24 ساعة.',
    btn_new_msg: 'إرسال رسالة أخرى',
    // Footer
    footer_tagline: 'حيث يتألق كل طفل',
    footer_desc: 'نرعى العقول والقلوب الصغيرة منذ عام 2009. نلتزم بتقديم أعلى جودة في تعليم الطفولة المبكرة في بيئة آمنة ومحبة.',
    footer_quick_links: 'روابط سريعة',
    footer_about_us: 'عن المدرسة',
    footer_contact_info: 'معلومات التواصل',
    footer_newsletter: 'النشرة الإخبارية',
    ph_newsletter: 'بريدك الإلكتروني',
    footer_copy: '&copy; 2025 جزيرة الأطفال. جميع الحقوق محفوظة.',
    footer_privacy: 'سياسة الخصوصية',
    footer_terms: 'شروط الخدمة',
    footer_sitemap: 'خريطة الموقع',
    fp1: 'مستكشفو الأطفال الصغار (2\u20133)',
    fp2: 'المتعلمون الصغار (3\u20134)',
    fp3: 'نجوم ما قبل المدرسة (4\u20135)',
    fp4: 'جاهز للروضة (5\u20136)',
  }
};

/* ============================================================
   LANGUAGE TOGGLE
   ============================================================ */
(function initLanguageToggle() {
  const STORAGE_KEY = 'kidsisland_lang';
  const htmlEl = document.documentElement;
  const langToggleBtn = document.getElementById('lang-toggle');
  const langLabel = document.getElementById('lang-label');

  /**
   * Apply a language to the entire page.
   * @param {'en'|'ar'} lang
   */
  function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    // 1. Set html attributes
    htmlEl.lang = lang;
    htmlEl.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // 2. Translate all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // 3. Translate all [data-i18n-placeholder] elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        // Strip HTML tags for placeholder (plain text only)
        const tmp = document.createElement('div');
        tmp.innerHTML = dict[key];
        el.placeholder = tmp.textContent || tmp.innerText || '';
      }
    });

    // 4. Update toggle button label (show the OTHER language)
    if (langLabel) {
      langLabel.textContent = lang === 'en' ? 'AR' : 'EN';
    }

    // 5. Persist preference
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* storage unavailable */ }
  }

  // Wire up toggle button
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const currentLang = htmlEl.lang === 'ar' ? 'ar' : 'en';
      applyLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
  }

  // Restore persisted preference on load
  let savedLang = 'en';
  try {
    savedLang = localStorage.getItem(STORAGE_KEY) || 'en';
  } catch (e) { /* storage unavailable */ }
  applyLanguage(savedLang);
})();

/* ============================================================
   UTILITY FUNCTIONS
   ============================================================ */

/**
 * Debounce function to limit rapid event firing
 */
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Throttle function for scroll events
 */
function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Check if element is in viewport
 */
function isInViewport(el, threshold = 0.15) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight * (1 - threshold) && rect.bottom >= 0;
}

/**
 * Smooth scroll to element
 */
function smoothScrollTo(target) {
  const el = document.querySelector(target);
  if (!el) return;
  const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 80;
  const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
  window.scrollTo({ top, behavior: 'smooth' });
}

/* ============================================================
   1. LOADING SCREEN
   ============================================================ */
(function initLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  if (!loadingScreen) return;

  document.body.classList.add('loading');

  // Hide loading screen after animation completes
  const hideLoading = () => {
    loadingScreen.classList.add('hidden');
    document.body.classList.remove('loading');
    // Trigger initial scroll animations
    setTimeout(triggerScrollAnimations, 100);
  };

  // Wait for page load + minimum display time
  const minDisplayTime = 1800;
  const startTime = Date.now();

  window.addEventListener('load', () => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, minDisplayTime - elapsed);
    setTimeout(hideLoading, remaining);
  });

  // Fallback: hide after 3 seconds regardless
  setTimeout(hideLoading, 3000);
})();

/* ============================================================
   2. STICKY NAVIGATION
   ============================================================ */
(function initStickyNav() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = throttle(() => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, 50);

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Run on init
})();

/* ============================================================
   3. HAMBURGER MOBILE MENU
   ============================================================ */
(function initHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navbar = document.getElementById('navbar');
  if (!hamburger || !navLinks) return;

  let isOpen = false;

  function openMenu() {
    isOpen = true;
    hamburger.classList.add('open');
    navLinks.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    isOpen = false;
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    if (isOpen) closeMenu();
    else openMenu();
  });

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (isOpen && navbar && !navbar.contains(e.target)) {
      closeMenu();
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeMenu();
  });

  // Close menu on resize to desktop
  window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 768 && isOpen) closeMenu();
  }, 200));
})();

/* ============================================================
   4. SMOOTH SCROLL FOR NAV LINKS
   ============================================================ */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#!') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      smoothScrollTo(href);
    });
  });
})();

/* ============================================================
   5. ACTIVE NAV LINK HIGHLIGHT ON SCROLL
   ============================================================ */
(function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const updateActiveLink = throttle(() => {
    const scrollPos = window.scrollY + 120;

    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }, 100);

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
})();

/* ============================================================
   6. HERO IMAGE SLIDER
   ============================================================ */
(function initHeroSlider() {
  const slider = document.getElementById('hero-slider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');

  if (!slides.length) return;

  let currentIndex = 0;
  let autoPlayInterval;
  const AUTO_PLAY_DELAY = 5000;

  function goToSlide(index) {
    // Remove active from current
    slides[currentIndex].classList.remove('active');
    dots[currentIndex]?.classList.remove('active');

    // Update index
    currentIndex = (index + slides.length) % slides.length;

    // Add active to new
    slides[currentIndex].classList.add('active');
    dots[currentIndex]?.classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayInterval = setInterval(nextSlide, AUTO_PLAY_DELAY);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  // Button controls
  nextBtn?.addEventListener('click', () => {
    nextSlide();
    stopAutoPlay();
    startAutoPlay();
  });

  prevBtn?.addEventListener('click', () => {
    prevSlide();
    stopAutoPlay();
    startAutoPlay();
  });

  // Dot controls
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.index);
      goToSlide(index);
      stopAutoPlay();
      startAutoPlay();
    });
  });

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
      stopAutoPlay();
      startAutoPlay();
    }
  }, { passive: true });

  // Pause on hover
  slider.addEventListener('mouseenter', stopAutoPlay);
  slider.addEventListener('mouseleave', startAutoPlay);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { prevSlide(); stopAutoPlay(); startAutoPlay(); }
    if (e.key === 'ArrowRight') { nextSlide(); stopAutoPlay(); startAutoPlay(); }
  });

  // Start auto play
  startAutoPlay();
})();

/* ============================================================
   7. GALLERY FILTER
   ============================================================ */
(function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (!filterBtns.length || !galleryItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter items
      galleryItems.forEach((item, index) => {
        const category = item.dataset.category;
        const shouldShow = filter === 'all' || category === filter;

        if (shouldShow) {
          item.style.display = '';
          // Stagger animation
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
            item.classList.add('filtering');
            setTimeout(() => item.classList.remove('filtering'), 400);
          }, index * 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
})();

/* ============================================================
   8. TESTIMONIALS SLIDER
   ============================================================ */
(function initTestimonialsSlider() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dot');
  const prevBtn = document.getElementById('test-prev');
  const nextBtn = document.getElementById('test-next');
  if (!slides.length) return;

  let currentIndex = 0;
  let autoPlayInterval;
  const AUTO_PLAY_DELAY = 6000;

  function goToSlide(index) {
    slides[currentIndex].classList.remove('active');
    dots[currentIndex]?.classList.remove('active');

    currentIndex = (index + slides.length) % slides.length;

    slides[currentIndex].classList.add('active');
    dots[currentIndex]?.classList.add('active');
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayInterval = setInterval(() => goToSlide(currentIndex + 1), AUTO_PLAY_DELAY);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
  }

  prevBtn?.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
    stopAutoPlay();
    startAutoPlay();
  });

  nextBtn?.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
    stopAutoPlay();
    startAutoPlay();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.index));
      stopAutoPlay();
      startAutoPlay();
    });
  });

  // Touch support
  const wrapper = document.querySelector('.testimonials-slider-wrapper');
  let touchStartX = 0;

  wrapper?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  wrapper?.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToSlide(currentIndex + 1);
      else goToSlide(currentIndex - 1);
      stopAutoPlay();
      startAutoPlay();
    }
  }, { passive: true });

  startAutoPlay();
})();

/* ============================================================
   9. FAQ ACCORDION
   ============================================================ */
(function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          otherItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        question.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard support
    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });
})();

/* ============================================================
   10. SCROLL ANIMATIONS (FADE IN ON SCROLL)
   ============================================================ */
function triggerScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');

  fadeElements.forEach(el => {
    if (isInViewport(el)) {
      el.classList.add('visible');
    }
  });
}

(function initScrollAnimations() {
  const handleScroll = throttle(triggerScrollAnimations, 100);
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', debounce(triggerScrollAnimations, 200));
  triggerScrollAnimations();
})();

/* ============================================================
   11. SCROLL TO TOP BUTTON
   ============================================================ */
(function initScrollToTop() {
  const btn = document.getElementById('scroll-top-btn');
  if (!btn) return;

  const handleScroll = throttle(() => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, 100);

  window.addEventListener('scroll', handleScroll, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ============================================================
   12. FORM VALIDATION — ADMISSION FORM
   ============================================================ */
(function initAdmissionForm() {
  const form = document.getElementById('admission-form');
  const successMsg = document.getElementById('form-success');
  const newAppBtn = document.getElementById('new-application-btn');
  if (!form) return;

  // Validation rules
  const validators = {
    'child-name': {
      validate: (val) => val.trim().length >= 2,
      message: 'Please enter the child\'s full name (at least 2 characters).'
    },
    'child-dob': {
      validate: (val) => {
        if (!val) return false;
        const dob = new Date(val);
        const now = new Date();
        const age = (now - dob) / (1000 * 60 * 60 * 24 * 365.25);
        return age >= 1.5 && age <= 7;
      },
      message: 'Please enter a valid date of birth (child must be between 1.5 and 7 years old).'
    },
    'child-gender': {
      validate: (val) => val !== '',
      message: 'Please select the child\'s gender.'
    },
    'program-select': {
      validate: (val) => val !== '',
      message: 'Please select a program.'
    },
    'parent-name': {
      validate: (val) => val.trim().length >= 2,
      message: 'Please enter the parent/guardian\'s full name.'
    },
    'parent-phone': {
      validate: (val) => {
        const cleaned = val.replace(/[\s\-\(\)\.]/g, '');
        return /^[\+]?[0-9]{7,15}$/.test(cleaned);
      },
      message: 'Please enter a valid phone number (e.g., +1 555 123 4567).'
    },
    'parent-email': {
      validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()),
      message: 'Please enter a valid email address.'
    },
    'parent-address': {
      validate: (val) => val.trim().length >= 5,
      message: 'Please enter a valid home address.'
    },
    'terms': {
      validate: (val, el) => el.checked,
      message: 'You must agree to the Terms & Conditions to proceed.'
    }
  };

  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);
    if (field) field.classList.add('error');
    if (field) field.classList.remove('success');
    if (errorEl) errorEl.textContent = message;
  }

  function showSuccess(fieldId) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);
    if (field) field.classList.remove('error');
    if (field) field.classList.add('success');
    if (errorEl) errorEl.textContent = '';
  }

  function clearValidation(fieldId) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);
    if (field) { field.classList.remove('error', 'success'); }
    if (errorEl) errorEl.textContent = '';
  }

  function validateField(fieldId) {
    const rule = validators[fieldId];
    if (!rule) return true;

    const field = document.getElementById(fieldId);
    if (!field) return true;

    const value = field.value;
    const isValid = rule.validate(value, field);

    if (!isValid) {
      showError(fieldId, rule.message);
      return false;
    } else {
      showSuccess(fieldId);
      return true;
    }
  }

  // Real-time validation on blur
  Object.keys(validators).forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (!field) return;

    field.addEventListener('blur', () => validateField(fieldId));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) {
        validateField(fieldId);
      }
    });
  });

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isFormValid = true;

    // Validate all fields
    Object.keys(validators).forEach(fieldId => {
      if (!validateField(fieldId)) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      // Scroll to first error
      const firstError = form.querySelector('.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
      }
      return;
    }

    // Simulate form submission
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.querySelector('.btn-text').textContent = 'Submitting...';
    }

    setTimeout(() => {
      form.style.display = 'none';
      if (successMsg) {
        successMsg.classList.add('visible');
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 1200);
  });

  // New application button
  newAppBtn?.addEventListener('click', () => {
    form.reset();
    form.style.display = '';
    if (successMsg) successMsg.classList.remove('visible');

    // Clear all validation states
    Object.keys(validators).forEach(fieldId => clearValidation(fieldId));

    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-text').textContent = 'Submit Application';
    }

    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();

/* ============================================================
   13. FORM VALIDATION — CONTACT FORM
   ============================================================ */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('contact-success');
  const newMsgBtn = document.getElementById('new-message-btn');
  if (!form) return;

  const validators = {
    'contact-name': {
      validate: (val) => val.trim().length >= 2,
      message: 'Please enter your name (at least 2 characters).'
    },
    'contact-email': {
      validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()),
      message: 'Please enter a valid email address.'
    },
    'contact-subject': {
      validate: (val) => val !== '',
      message: 'Please select a subject.'
    },
    'contact-message': {
      validate: (val) => val.trim().length >= 10,
      message: 'Please enter a message (at least 10 characters).'
    }
  };

  function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);
    if (field) { field.classList.add('error'); field.classList.remove('success'); }
    if (errorEl) errorEl.textContent = message;
  }

  function showFieldSuccess(fieldId) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);
    if (field) { field.classList.remove('error'); field.classList.add('success'); }
    if (errorEl) errorEl.textContent = '';
  }

  function validateField(fieldId) {
    const rule = validators[fieldId];
    if (!rule) return true;
    const field = document.getElementById(fieldId);
    if (!field) return true;
    const isValid = rule.validate(field.value);
    if (!isValid) { showFieldError(fieldId, rule.message); return false; }
    else { showFieldSuccess(fieldId); return true; }
  }

  Object.keys(validators).forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.addEventListener('blur', () => validateField(fieldId));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) validateField(fieldId);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    Object.keys(validators).forEach(fieldId => {
      if (!validateField(fieldId)) isValid = false;
    });

    if (!isValid) {
      const firstError = form.querySelector('.error');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const submitBtn = form.querySelector('.btn-submit');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.querySelector('.btn-text').textContent = 'Sending...';
    }

    setTimeout(() => {
      form.style.display = 'none';
      if (successMsg) {
        successMsg.classList.add('visible');
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 1000);
  });

  newMsgBtn?.addEventListener('click', () => {
    form.reset();
    form.style.display = '';
    if (successMsg) successMsg.classList.remove('visible');
    Object.keys(validators).forEach(fieldId => {
      const field = document.getElementById(fieldId);
      const errorEl = document.getElementById(`${fieldId}-error`);
      if (field) field.classList.remove('error', 'success');
      if (errorEl) errorEl.textContent = '';
    });
    const submitBtn = form.querySelector('.btn-submit');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-text').textContent = 'Send Message';
    }
  });
})();

/* ============================================================
   14. NEWSLETTER FORM
   ============================================================ */
(function initNewsletter() {
  const emailInput = document.getElementById('newsletter-email');
  const submitBtn = document.getElementById('newsletter-btn');
  const msgEl = document.getElementById('newsletter-msg');
  if (!emailInput || !submitBtn) return;

  submitBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!email) {
      if (msgEl) {
        msgEl.textContent = 'Please enter your email address.';
        msgEl.style.color = '#ff8a80';
      }
      return;
    }

    if (!isValidEmail) {
      if (msgEl) {
        msgEl.textContent = 'Please enter a valid email address.';
        msgEl.style.color = '#ff8a80';
      }
      return;
    }

    // Simulate subscription
    submitBtn.disabled = true;
    submitBtn.textContent = '✓';

    if (msgEl) {
      msgEl.textContent = 'Thank you for subscribing!';
      msgEl.style.color = '#a5d6a7';
    }

    emailInput.value = '';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = '✉';
      if (msgEl) msgEl.textContent = '';
    }, 4000);
  });

  emailInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitBtn.click();
  });
})();

/* ============================================================
   15. COUNTER ANIMATION FOR HERO STATS
   ============================================================ */
(function initCounterAnimation() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const animatedStats = new Set();

  function animateCounter(el) {
    const text = el.textContent;
    const numMatch = text.match(/\d+/);
    if (!numMatch) return;

    const target = parseInt(numMatch[0]);
    const prefix = text.substring(0, numMatch.index);
    const suffix = text.substring(numMatch.index + numMatch[0].length);
    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = prefix + current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedStats.has(entry.target)) {
        animatedStats.add(entry.target);
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => observer.observe(el));
})();

/* ============================================================
   16. PARALLAX EFFECT FOR HERO FLOATING ITEMS
   ============================================================ */
(function initParallax() {
  const floatItems = document.querySelectorAll('.float-item');
  if (!floatItems.length) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        floatItems.forEach((item, index) => {
          const speed = 0.05 + (index * 0.02);
          const yOffset = scrollY * speed;
          item.style.transform = `translateY(${-yOffset}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

/* ============================================================
   17. CARD HOVER TILT EFFECT
   ============================================================ */
(function initCardTilt() {
  const cards = document.querySelectorAll('.feature-card, .program-card, .testimonial-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.4s ease';
      setTimeout(() => { card.style.transition = ''; }, 400);
    });
  });
})();

/* ============================================================
   18. GALLERY LIGHTBOX (SIMPLE)
   ============================================================ */
(function initGalleryLightbox() {
  const galleryCards = document.querySelectorAll('.gallery-card');
  if (!galleryCards.length) return;

  // Create lightbox overlay
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.85); z-index: 9998; display: none;
    align-items: center; justify-content: center; cursor: pointer;
    backdrop-filter: blur(8px);
  `;

  const lightboxContent = document.createElement('div');
  lightboxContent.style.cssText = `
    background: white; border-radius: 24px; padding: 3rem;
    text-align: center; max-width: 400px; width: 90%;
    animation: successPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
  `;

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.cssText = `
    position: absolute; top: 1rem; right: 1rem; background: none;
    border: none; font-size: 1.75rem; cursor: pointer; color: #666;
    line-height: 1; padding: 0.25rem 0.5rem; border-radius: 50%;
    transition: all 0.2s;
  `;
  closeBtn.addEventListener('mouseenter', () => { closeBtn.style.background = '#f5f5f5'; });
  closeBtn.addEventListener('mouseleave', () => { closeBtn.style.background = 'none'; });

  lightboxContent.appendChild(closeBtn);
  lightbox.appendChild(lightboxContent);
  document.body.appendChild(lightbox);

  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      const emojiScene = card.querySelector('.gallery-emoji-scene');
      const overlay = card.querySelector('.gallery-overlay');
      const title = overlay?.querySelector('h4')?.textContent || '';
      const category = overlay?.querySelector('p')?.textContent || '';
      const emojiHTML = emojiScene ? emojiScene.innerHTML : '';

      lightboxContent.innerHTML = `
        <button id="lb-close" style="position:absolute;top:1rem;right:1rem;background:none;border:none;font-size:1.75rem;cursor:pointer;color:#666;line-height:1;padding:0.25rem 0.5rem;border-radius:50%;">&times;</button>
        <div style="font-size:4rem;margin-bottom:1rem;">${emojiHTML}</div>
        <h3 style="font-family:'Fredoka One',cursive;font-size:1.5rem;color:#2d3748;margin-bottom:0.5rem;">${title}</h3>
        <p style="font-size:0.875rem;color:#718096;text-transform:uppercase;letter-spacing:0.05em;">${category}</p>
      `;

      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';

      document.getElementById('lb-close')?.addEventListener('click', closeLightbox);
    });
  });

  function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') closeLightbox();
  });
})();

/* ============================================================
   19. INTERSECTION OBSERVER FOR STAGGERED ANIMATIONS
   ============================================================ */
(function initStaggeredAnimations() {
  const grids = [
    { selector: '.features-grid', childSelector: '.feature-card' },
    { selector: '.programs-grid', childSelector: '.program-card' },
    { selector: '.gallery-grid', childSelector: '.gallery-item' },
    { selector: '.extra-programs-grid', childSelector: '.extra-program-item' },
  ];

  grids.forEach(({ selector, childSelector }) => {
    const grid = document.querySelector(selector);
    if (!grid) return;

    const children = grid.querySelectorAll(childSelector);
    children.forEach((child, index) => {
      child.style.transitionDelay = `${index * 0.08}s`;
    });
  });
})();

/* ============================================================
   20. DYNAMIC YEAR IN FOOTER
   ============================================================ */
(function updateCopyrightYear() {
  const yearEls = document.querySelectorAll('.footer-bottom-content p');
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => {
    el.innerHTML = el.innerHTML.replace(/\d{4}/, currentYear);
  });
})();

/* ============================================================
   21. NAVBAR BACKGROUND ON HERO SECTION
   ============================================================ */
(function initNavbarHeroState() {
  const navbar = document.getElementById('navbar');
  const heroSection = document.getElementById('home');
  if (!navbar || !heroSection) return;

  // Initially transparent on hero
  const updateNavStyle = throttle(() => {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    if (window.scrollY < heroBottom - 100) {
      navbar.style.background = 'transparent';
    } else {
      navbar.style.background = '';
    }
  }, 50);

  // Override: always show scrolled state for readability
  // (handled by .scrolled class in CSS)
})();

/* ============================================================
   22. SMOOTH REVEAL FOR SECTION HEADERS
   ============================================================ */
(function initSectionHeaderReveal() {
  const headers = document.querySelectorAll('.section-header');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const tag = entry.target.querySelector('.section-tag');
        const title = entry.target.querySelector('.section-title');
        const subtitle = entry.target.querySelector('.section-subtitle');

        if (tag) { tag.style.animation = 'fadeInUp 0.5s ease forwards'; }
        if (title) { title.style.animation = 'fadeInUp 0.5s ease 0.1s forwards'; }
        if (subtitle) { subtitle.style.animation = 'fadeInUp 0.5s ease 0.2s forwards'; }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  headers.forEach(header => observer.observe(header));
})();

/* ============================================================
   23. PHONE NUMBER FORMATTING
   ============================================================ */
(function initPhoneFormatting() {
  const phoneInputs = document.querySelectorAll('input[type="tel"]');

  phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      let value = e.target.value.replace(/[^\d\+\-\(\)\s]/g, '');
      e.target.value = value;
    });
  });
})();

/* ============================================================
   24. PROGRAM CARD HOVER ENHANCEMENT
   ============================================================ */
(function initProgramCardHover() {
  const programCards = document.querySelectorAll('.program-card');

  programCards.forEach(card => {
    const icon = card.querySelector('.program-icon');

    card.addEventListener('mouseenter', () => {
      if (icon) {
        icon.style.animation = 'none';
        icon.style.transform = 'scale(1.2) rotate(10deg)';
        icon.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
      }
    });

    card.addEventListener('mouseleave', () => {
      if (icon) {
        icon.style.transform = '';
        icon.style.transition = '';
        setTimeout(() => {
          icon.style.animation = '';
        }, 300);
      }
    });
  });
})();

/* ============================================================
   25. ACCESSIBILITY: SKIP TO MAIN CONTENT
   ============================================================ */
(function initSkipLink() {
  const skipLink = document.createElement('a');
  skipLink.href = '#home';
  skipLink.textContent = 'Skip to main content';
  skipLink.style.cssText = `
    position: fixed; top: -100%; left: 1rem; z-index: 99999;
    background: #ff8c42; color: white; padding: 0.75rem 1.5rem;
    border-radius: 0 0 8px 8px; font-weight: bold; font-family: Nunito, sans-serif;
    transition: top 0.2s; text-decoration: none;
  `;
  skipLink.addEventListener('focus', () => { skipLink.style.top = '0'; });
  skipLink.addEventListener('blur', () => { skipLink.style.top = '-100%'; });
  document.body.prepend(skipLink);
})();

/* ============================================================
   26. INIT — RUN AFTER DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Set initial date max for DOB field (today)
  const dobInput = document.getElementById('child-dob');
  if (dobInput) {
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
    const minDate = new Date(today.getFullYear() - 7, today.getMonth(), today.getDate());
    dobInput.max = today.toISOString().split('T')[0];
    dobInput.min = minDate.toISOString().split('T')[0];
  }

  // Add CSS animation keyframes dynamically for lightbox
  const style = document.createElement('style');
  style.textContent = `
    @keyframes successPop {
      from { opacity: 0; transform: scale(0.8); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  console.log('%c🏝️ Kids Island Kindergarten', 'color: #ff8c42; font-size: 18px; font-weight: bold; font-family: Nunito, sans-serif;');
  console.log('%cWebsite loaded successfully!', 'color: #4caf50; font-size: 14px;');
});
