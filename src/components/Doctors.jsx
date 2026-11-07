import React, { useState } from 'react';
import { FaTachometerAlt, FaUserMd, FaCalendarAlt, FaUsers, FaCog, FaBars, FaEye, FaEyeSlash, FaMapMarkerAlt, FaComments, FaRupeeSign, FaClock, FaPhoneAlt, FaFilePdf, FaSignOutAlt, FaSearch, FaEnvelope, FaPhone} from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, BarChart, Bar, CartesianGrid} from 'recharts';
import doctor1 from "./images/usrbig1.jpg";
import doctor2 from "./images/usrbig2.jpg";
import doctor3 from "./images/usrbig3.jpg";
import doctor4 from "./images/usrbig4.jpg";
import doctor5 from "./images/usrbig5.jpg";
import doctor6 from "./images/usrbig7.jpg";
import doc from "./images/doctors.svg";
const Sidebar = () =>{ 
    const [activeContent, setActiveContent] = useState('Dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleLinkClick = (content) => {
        setActiveContent(content);
    };
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const handleLogout = () => {
        // Clear session data (if any)
        sessionStorage.clear();
        localStorage.clear();

        // Redirect to login page (adjust the URL as per your app's routing)
        window.location.href = "/login";
    };
    const dynamicStyles = {
        sidebar: {
            width: isSidebarOpen ? '250px' : '70px',
            backgroundColor: '#fff',
            color: 'black',
            padding: isSidebarOpen ? '20px' : '10px',
            height: '100vh',
            position: 'fixed',
            overflowX: 'hidden', // Hide content when closed
            transition: '0.3s', // Smooth sliding effect
            alignItems: isSidebarOpen ? 'flex-start' : 'center', 
            zIndex: 1000,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        },
        content: {
            marginLeft: isSidebarOpen ? '250px' : '70px',
            flex: 1,
            transition: 'margin-left 0.3s',
        },
        menuItem: {
            display: 'flex',
            alignItems: 'center',
            gap: isSidebarOpen ? '10px' : '0',
            padding: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            color: '#8c939d',
        },
        menuText: {
            display: isSidebarOpen ? 'inline' : 'none',
            transition: 'opacity 0.3s',
            opacity: isSidebarOpen ? 1 : 0,
        },
        icon: {
            fontSize: '18px',
        },
        toggleButton: {
            position: 'fixed',
            top: '20px',
            left: '10px',
            fontSize: '24px',
            cursor: 'pointer',
            zIndex: 1001, // Above the sidebar
        },
    };
    return (
        <div style={styles.container}>
            {/* Sidebar Toggle Button */}
            <FaBars style={dynamicStyles.toggleButton} onClick={toggleSidebar} />
            {/* Sidebar */}
            <div style={dynamicStyles.sidebar}>
                <div style={styles.profileSection}>
                    <img
                        src="./images/doctor-profile.jpg"
                        alt="Doctor"
                        style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            display: isSidebarOpen ? "block" : "none",
                        }}
                    />
                    {isSidebarOpen && (
                        <>
                            <h3 style={{ margin: "10px 0 0", fontSize: "18px" }}>
                                Ashton Cox
                            </h3>
                            <p style={{ fontSize: "12px", color: "#bbb" }}>DOCTOR</p>
                        </>
                    )}
                </div>
                <ul style={styles.menuList}>
                    <li
                        style={
                            activeContent === "Dashboard"
                                ? styles.activeItem
                                : dynamicStyles.menuItem
                        }
                        onClick={() => handleLinkClick("Dashboard")}
                    >
                        <FaTachometerAlt style={dynamicStyles.icon} />
                        <span style={dynamicStyles.menuText}>Dashboard</span>
                    </li>
                    <li
                        style={
                            activeContent === "Appointments"
                                ? styles.activeItem
                                : dynamicStyles.menuItem
                        }
                        onClick={() => handleLinkClick("Appointments")}
                    >
                        <FaCalendarAlt style={dynamicStyles.icon} />
                        <span style={dynamicStyles.menuText}>Appointments</span>
                    </li>
                    <li
                        style={
                            activeContent === "Doctors"
                                ? styles.activeItem
                                : dynamicStyles.menuItem
                        }
                        onClick={() => handleLinkClick("Doctors")}
                    >
                        <FaUserMd style={dynamicStyles.icon} />
                        <span style={dynamicStyles.menuText}>Doctors</span>
                    </li>
                    <li
                        style={
                            activeContent === "Patients"
                                ? styles.activeItem
                                : dynamicStyles.menuItem
                        }
                        onClick={() => handleLinkClick("Patients")}
                    >
                        <FaUsers style={dynamicStyles.icon} />
                        <span style={dynamicStyles.menuText}>Patients</span>
                    </li>
                    <li
                        style={
                            activeContent === "Settings"
                                ? styles.activeItem
                                : dynamicStyles.menuItem
                        }
                        onClick={() => handleLinkClick("Settings")}
                    >
                        <FaCog style={dynamicStyles.icon} />
                        <span style={dynamicStyles.menuText}>Settings</span>
                    </li>
                    {/* Logout Button */}
                    <li
                        style={dynamicStyles.menuItem}
                        onClick={handleLogout}
                    >
                        <FaSignOutAlt style={dynamicStyles.icon} />
                        <span style={dynamicStyles.menuText}>Logout</span>
                    </li>
                </ul>
            </div>

            {/* Content Section */}
            <div style={dynamicStyles.content}>
                {activeContent === "Dashboard" && <Dashboard />}
                {activeContent === "Appointments" && <Appointments />}
                {activeContent === "Doctors" && <Doctors />}
                {activeContent === "Patients" && <Patients />}
                {activeContent === "Settings" && <Settings />}
            </div>
        </div>
    );
};
const Dashboard = () => {
    const lineData = [
        { name: '00:00', new: 30, old: 20 },
        { name: '02:00', new: 50, old: 30 },
        { name: '04:00', new: 40, old: 25 },
        { name: '06:00', new: 80, old: 50 },
    ];

    const pieData = [
        { name: 'Face To Face', value: 80, color: '#FFA500' },
        { name: 'E-Consult', value: 100, color: '#00A8FF' },
        { name: 'Available', value: 69, color: '#00FF7F' },
    ];
    const appointments = [
    { name: "John Doe", gender: "Male", lastVisit: "12/05/2016", disease: "Fever", report: true },
    { name: "Sarah Smith", gender: "Female", lastVisit: "12/05/2016", disease: "Cholera", report: true },
    { name: "Airi Satou", gender: "Male", lastVisit: "12/05/2016", disease: "Jaundice", report: true },
    { name: "Angelica Ramos", gender: "Female", lastVisit: "12/05/2016", disease: "Typhoid", report: true },
    { name: "Ashton Cox", gender: "Female", lastVisit: "12/05/2016", disease: "Malaria", report: true },
    { name: "Cara Stevens", gender: "Male", lastVisit: "12/05/2016", disease: "Infection", report: true },
    { name: "Michael Johnson", gender: "Male", lastVisit: "12/06/2016", disease: "Flu", report: true },
            
];

const patientGroups = [
    { group: "Cholesterol", patients: 5 },
    { group: "Diabetic", patients: 14 },
    { group: "Low Blood Pressure", patients: 10 },
    { group: "Hypertension", patients: 21 },
    { group: "Malaria", patients: 11 },
    { group: "Dental Problem", patients: 17 },
];
    const [tasks, setTasks] = useState([
        { id: 1, text: "Review patient charts", priority: "High", done: false },
        { id: 2, text: "Complete patient prescriptions", priority: "High", done: false },
        { id: 3, text: "Follow-up with patients", priority: "Normal", done: false },
        { id: 4, text: "Consult with specialists", priority: "High", done: false },
        { id: 5, text: "Organize medical supplies", priority: "Low", done: false },
        { id: 6, text: "Check and update patient records", priority: "High", done: false },
    ]);

    const toggleTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    };

    const data = [
        { day: "Mon", male: 40, female: 60 },
        { day: "Tue", male: 60, female: 80 },
        { day: "Wed", male: 80, female: 100 },
        { day: "Thu", male: 50, female: 70 },
        { day: "Fri", male: 70, female: 90 },
        { day: "Sat", male: 90, female: 120 },
    ];
    return (
        <div >
            <div style={styles.container7}>
                <div style={styles.header7}>Doctor Dashboard &gt; Dashboard</div>
                <form style={styles.form7}>
                    <div style={styles.formContent}>
                        <div style={styles.welcomeText}>Welcome back</div>
                        <div style={styles.nameText}>DR. Sarah Smith!</div>
                        <div style={styles.welcomeText}>Gynecologist, MBBS, MD</div>
                        <div style={{ display: 'flex' }}>
                            <div style={styles.cardContainer}>
                                <div style={{ ...styles.card, ...styles.appointments }}>
                                    Appointments <br />
                                    <span>12+</span>
                                </div>
                                <div style={{ ...styles.card, ...styles.surgeries }}>
                                    Surgeries <br />
                                    <span>3+</span>
                                </div>
                                <div style={{ ...styles.card, ...styles.roomVisit }}>
                                    Room Visit <br />
                                    <span>12+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.illustration}>
                        <img
                            src={doc} // Replace with the actual image path
                            alt="Doctors Illustration"
                            style={styles.image}
                        />
                    </div>
                </form>
            </div>
            <div style={styles.chartContainer}>
                {/* Line Chart Card */}
                <div style={{ ...styles.chartCard, flex: 6 }}>
                    <h4 style={styles.chartTitle}>Patients Survey</h4>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={lineData}>
                            <XAxis dataKey="name" stroke="#ccc" />
                            <YAxis stroke="#ccc" />
                            <Tooltip />
                            <Legend
                                layout="horizontal"
                                verticalAlign="top"
                                align="center"
                                iconType="circle"
                                formatter={(value, entry) => (
                                    <span style={{ color: entry.color }}>{value}</span>
                                )}
                            />
                            <Line type="monotone" dataKey="new" stroke="#8A2BE2" strokeWidth={2} name="New Patients" />
                            <Line type="monotone" dataKey="old" stroke="#3CB371" strokeWidth={2} name="Old Patients" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart Card */}
                <div style={{ ...styles.chartCard, flex: 4 }}>
                    <h4 style={styles.chartTitle}>Appointment Review</h4>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                outerRadius={70} // Adjust size if needed
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                nameKey="name"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Legend
                                layout="horizontal"
                                verticalAlign="bottom"
                                align="center"
                                iconType="circle"
                                formatter={(value, entry) => (
                                    <span style={{ color: entry.color }}>{value}</span>
                                )}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <div style={styles.pieLabel}>
                        Total: {pieData.reduce((sum, item) => sum + item.value, 0)}
                    </div>
                </div>
            </div>
            <div style={styles.container9}>
                {/* Appointments Section */}
                <div style={styles.section}>
                    <div style={styles.header9}>
                        <h3>Appointments</h3>
                    </div>
                    <div style={styles.scrollable}>
                        <table style={styles.table9}>
                            <thead>
                                <tr>
                                    <th>Patient Name</th>
                                    <th>Gender</th>
                                    <th>Last Visit</th>
                                    <th>Diseases</th>
                                    <th>Report</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment, index) => (
                                    <tr key={index}>
                                        <td style={styles.tableCell}>{appointment.name}</td>
                                        <td style={styles.tableCell}>{appointment.gender}</td>
                                        <td style={styles.tableCell}>{appointment.lastVisit}</td>
                                        <td style={styles.tableCell}>
                                            <span style={{ ...styles.badge, backgroundColor: getBadgeColor(appointment.disease) }}>
                                                {appointment.disease}
                                            </span>
                                        </td>
                                        <td style={styles.tableCell}>
                                            {appointment.report && <span style={styles.pdfIcon}>📄</span>}
                                        </td>
                                        <td style={styles.tableCell}>
                                            <a href="#" style={styles.detailsLink}>
                                                Details
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Patient Groups Section */}
                <div style={styles.section}>
                    <div style={styles.header9}>
                        <h3>Patient Group</h3>
                    </div>
                        <ul style={styles.patientGroupsList}>
                            {patientGroups.map((group, index) => (
                                <li key={index} style={styles.patientGroupsItem}>
                                    <span style={styles.icon9}>{group.group[0]}</span>
                                    <span>{group.group}</span>
                                    <span style={styles.patientsCount}>{group.patients} Patients</span>
                                </li>
                            ))}
                        </ul>
                </div>
            </div>
            <div style={styles.container10}>
                <div style={styles.card10}>
                    <div style={styles.header10}>
                        <h3>Todo List</h3>
                    </div>
                    <ul style={styles.todoList}>
                        {tasks.map((task) => (
                            <li
                                key={task.id}
                                style={{
                                    ...styles.todoItem,
                                    textDecoration: task.done ? "line-through" : "none",
                                    color: task.done ? "#999" : "#333",
                                }}
                            >
                                <input
                                    type="checkbox"
                                    checked={task.done}
                                    onChange={() => toggleTask(task.id)}
                                    style={styles.checkbox}
                                />
                                {task.text}
                                <span style={styles.priority(task.priority)}>{task.priority}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={styles.card10}>
                    <div style={styles.header10}>
                        <h3>Number Of Patients</h3>
                    </div>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip
                            contentStyle={{ backgroundColor: "#fff", borderRadius: "8px" }}
                            formatter={(value) => `${value}`}
                        />
                        <Legend />
                        <Bar dataKey="male" fill="#6a5acd" name="Male" />
                        <Bar dataKey="female" fill="#b19cd9" name="Female" />
                    </BarChart>
                </div>
            </div>
        </div>
    );

function getBadgeColor(disease) {
    const colors = {
        Fever: "#ffccd2",
        Cholera: "#c8e6c9",
        Jaundice: "#ffe082",
        Typhoid: "#d1c4e9",
        Malaria: "#ffab91",
        Infection: "#b2ebf2",
        Flu: "#bbdefb",
    };
    return colors[disease] || "#ccc";
}
};
const Appointments = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const appointments = [
        { name: "John Deo", date: "02/25/2018", time: "09:00", email: "john@example.com", mobile: "1234567890", gender: "female", status: "Upcoming", address: "123 Elm St, Seattle", disease: "Fever", lastVisit: "09/01/2024" },
        { name: "Jane Smith", date: "10/02/2024", time: "09:00", email: "jane@example.com", mobile: "0987654321", gender: "male", status: "Completed", address: "456 Oak St, Miami", disease: "Flu", lastVisit: "08/15/2024" },
        { name: "Mike Johnson", date: "10/03/2024", time: "09:00", email: "mike@example.com", mobile: "5678901234", gender: "male", status: "Canceled", address: "789 Pine St, Chicago", disease: "Cough", lastVisit: "09/05/2024" },
        { name: "Emily Davis", date: "10/04/2024", time: "09:00", email: "emily@example.com", mobile: "3216549870", gender: "female", status: "Upcoming", address: "321 Maple St, Boston", disease: "Headache", lastVisit: "09/10/2024" },
        { name: "Chris Lee", date: "10/05/2024", time: "09:00", email: "chris@example.com", mobile: "4561237890", gender: "male", status: "Completed", address: "654 Birch St, Atlanta", disease: "Stomachache", lastVisit: "08/20/2024" },
        { name: "Anna Brown", date: "10/06/2024", time: "09:00", email: "anna@example.com", mobile: "6549873210", gender: "female", status: "Upcoming", address: "987 Cedar St, Houston", disease: "Allergy", lastVisit: "09/15/2024" },
        { name: "David Wilson", date: "10/07/2024", time: "09:00", email: "david@example.com", mobile: "7891234560", gender: "male", status: "Canceled", address: "159 Walnut St, Austin", disease: "Back Pain", lastVisit: "09/25/2024" },
        { name: "Laura White", date: "10/08/2024", time: "09:00", email: "laura@example.com", mobile: "8523697410", gender: "female", status: "Upcoming", address: "753 Ash St, Jacksonville", disease: "Anxiety", lastVisit: "09/20/2024" },
        { name: "James Miller", date: "10/09/2024", time: "09:00", email: "james@example.com", mobile: "9632581470", gender: "male", status: "Completed", address: "852 Elm St, Kansas City", disease: "Sinus Infection", lastVisit: "08/30/2024" },
        { name: "Sophia Taylor", date: "10/10/2024", time: "09:00", email: "sophia@example.com", mobile: "7418529630", gender: "male", status: "Upcoming", address: "369 Maple St, Denver", disease: "Migraine", lastVisit: "09/05/2024" },
    ];

    const filteredAppointments = appointments.filter((appointment) => {
        return (
            appointment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.mobile.includes(searchTerm)
        );
    });
    return (
        <div style={styles.container5}>
            <form style={styles.form5}>
                <header style={styles.header}>
                    <h2 style={styles.headerTitle}>Appointments</h2>
                    <div style={styles.searchBox}>
                        <FaSearch color="white" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={styles.searchInput}
                        />
                    </div>
                </header>
                <div style={styles.responsiveTable}>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>Patient</th>
                                <th style={styles.th}>Appointment</th>
                                <th style={styles.th}>Time</th>
                                <th style={styles.th}>Email</th>
                                <th style={styles.th}>Mobile</th>
                                <th style={styles.th}>Gender</th>
                                <th style={styles.th}>Status</th>
                                <th style={styles.th}>Address</th>
                                <th style={styles.th}>Disease</th>
                                <th style={styles.th}>Last Visit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAppointments.map((appointment, index) => (
                                <tr key={index} style={styles.tr}>
                                    <td style={styles.td}>{appointment.name}</td>
                                    <td style={styles.td}>{appointment.date}</td>
                                    <td style={styles.td}>{appointment.time}</td>
                                    <td style={styles.td}>
                                        <h23 style={{ display: 'flex' }}> <FaEnvelope style={styles.icon5} /> {appointment.email}</h23>
                                    </td>
                                    <td style={styles.td}>
                                        <h23 style={{ display: 'flex' }}> <FaPhone style={styles.icon5} /> {appointment.mobile}</h23>
                                    </td>
                                    <td style={styles.td}>{appointment.gender}</td>
                                    <td style={styles.td}>{appointment.status}</td>
                                    <td style={styles.td}>
                                        <h23 style={{ display: 'flex' }}><FaMapMarkerAlt style={styles.icon5} /> {appointment.address}</h23>
                                    </td>
                                    <td style={styles.td}>{appointment.disease}</td>
                                    <td style={styles.td}>{appointment.lastVisit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    );
};


const Doctors = () => {
    const doctorData = [
        {
            id: 1,
            name: "Dr. Sarah Smith",
            degree: "MBBS, MD - Dermatology",
            rating: 4,
            feedback: "12342",
            cost: 500,
            address: "Galaxy Plaza, Andheri West, Mumbai",
            timing: "MON - FRI 9:00 AM - 5:00 PM",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: doctor1,
        },
        {
            id: 2,
            name: "Dr. Jay Soni",
            degree: "BDS, MDS",
            rating: 3,
            feedback: "6545",
            cost: 300,
            address: "Galaxy Plaza, Andheri West, Mumbai",
            timing: "MON - FRI 9:00 AM - 5:00 PM",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: doctor2,
        },
        {
            id: 3,
            name: "Dr. Megha Trivedi",
            degree: "MBBS, MS",
            rating: 4,
            feedback: "3456",
            cost: 600,
            address: "Galaxy Plaza, Andheri West, Mumbai",
            timing: "MON - FRI 9:00 AM - 5:00 PM",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: doctor4,
        },
        {
            id: 4,
            name: "Dr. Arun Malhotra",
            degree: "MBBS, MD - Pediatrics",
            rating: 5,
            feedback: "8701",
            cost: 800,
            address: "Galaxy Plaza, Andheri West, Mumbai",
            timing: "MON - FRI 9:00 AM - 5:00 PM",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: doctor5,
        },
        {
            id: 5,
            name: "Dr. Priya Kapoor",
            degree: "MBBS, MS - Orthopedics",
            rating: 4,
            feedback: "9342",
            cost: 700,
            address: "Galaxy Plaza, Andheri West, Mumbai",
            timing: "MON - FRI 9:00 AM - 5:00 PM",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: doctor6,
        },
    ];
    return (
        <div style={styles.container3}>
            {doctorData.map((doctor) => (
                <div key={doctor.id} style={styles.card3}>
                    <img src={doctor.image} alt={doctor.name} style={styles.image3} />
                    <div style={styles.doctorDetails}>
                        <h4 style={styles.name}>{doctor.name}</h4>
                        <p>{doctor.degree}</p>
                        <div style={styles.rating}>
                            {doctor.rating} ⭐
                            <span style={styles.ratingStars}>({doctor.feedback} ratings)</span>
                        </div>
                        <p style={styles.description}>{doctor.description}</p>
                    </div>
                    <div style={styles.separatorColumn}>
                        <div style={styles.infoRow}>
                            <FaMapMarkerAlt style={styles.icon} />
                            <p>{doctor.address}</p>
                        </div>
                        <div style={styles.infoRow}>
                            <FaComments style={styles.icon} />
                            <p>{doctor.feedback} Feedback</p>
                        </div>
                        <div style={styles.infoRow}>
                            <FaRupeeSign style={styles.icon} />
                            <p>INR {doctor.cost}</p>
                        </div>
                        <div style={styles.infoRow}>
                            <FaClock style={styles.icon} />
                            <p>{doctor.timing}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
const Patients = () => {
    const patients = [
        {
            id: 1,
            name: "Lindsey Johnson",
            time: "10:00 - 10:30 AM",
            date: "Friday, June 26",
            address: "Shanti Nagar Bldg No B 4, Sector No 6, Mira Road",
            phone: "+123 87654565",
            bloodGroup: "O+",
            reportLink: "#",
            photo: doctor1,
        },
        {
            id: 2,
            name: "Michael Smith",
            time: "11:00 - 11:30 AM",
            date: "Friday, June 26",
            address: "Galaxy Apartments, Sector 8, Mumbai",
            phone: "+123 98765432",
            bloodGroup: "A+",
            reportLink: "#",
            photo: doctor2,
        },
        {
            id: 3,
            name: "Emma Wilson",
            time: "12:00 - 12:30 PM",
            date: "Friday, June 26",
            address: "Green Valley Residency, Andheri West",
            phone: "+123 45678901",
            bloodGroup: "B+",
            reportLink: "#",
            photo: doctor3,
        },
        {
            id: 4,
            name: "Sophia Davis",
            time: "1:00 - 1:30 PM",
            date: "Friday, June 26",
            address: "Orchid Tower, Bandra East",
            phone: "+123 65432109",
            bloodGroup: "AB+",
            reportLink: "#",
            photo: doctor4,
        },
        {
            id: 5,
            name: "Liam Brown",
            time: "2:00 - 2:30 PM",
            date: "Friday, June 26",
            address: "Sunshine Apartments, Goregaon East",
            phone: "+123 32145678",
            bloodGroup: "O-",
            reportLink: "#",
            photo: doctor5,
        },
        {
            id: 6,
            name: "Olivia Johnson",
            time: "3:00 - 3:30 PM",
            date: "Friday, June 26",
            address: "Sea Breeze Residency, Juhu Beach",
            phone: "+123 78901234",
            bloodGroup: "A-",
            reportLink: "#",
            photo: doctor6,
        },
    ];

    return (
        <div style={styles.patientsContainer}>
            {patients.map((patient) => (
                <div key={patient.id} style={styles.patientCard}>
                    {/* Header */}
                    <div style={styles.patientHeader}>
                        <img
                            src={patient.photo}
                            alt={patient.name}
                            style={styles.patientImage}
                        />
                        <div>
                            <h3 style={styles.patientName}>{patient.name}</h3>
                            <p>Patient Id: {patient.id}</p>
                        </div>
                        <div style={styles.patientTime}>
                            <p>{patient.time}</p>
                            <p>{patient.date}</p>
                        </div>
                    </div>
                    {/* Details */}
                    <div style={styles.patientDetails}>
                        <div style={styles.detailRow}>
                            <FaMapMarkerAlt style={{ color: "#000" }} />
                            <span>{patient.address}</span>
                        </div>
                        <div style={styles.detailRow}>
                            <FaPhoneAlt style={{ color: "#000" }} />
                            <span>{patient.phone}</span>
                        </div>
                        <div style={styles.separator}></div>
                        <div>
                            <p>
                                <strong>Blood Group:</strong> {patient.bloodGroup}
                            </p>
                            <p>
                                <div style={styles.detailRow}>
                                <strong>Reports:</strong>{" "}
                                    <a href={patient.reportLink} style={{ color: "red" }}>
                                    <FaFilePdf />
                                </a>
                                </div>
                            </p>
                        </div>
                    </div>
                    {/* Read More Button */}
                    <button style={styles.readMore}>Read More</button>
                </div>
            ))}
        </div>
    );
};
const Settings = () => {
    const [username, setUsername] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSave = () => {
        // Validation
        if (!username || !currentPassword || !newPassword) {
            setErrorMessage("All fields are required!");
            return;
        }

        if (newPassword === currentPassword) {
            setErrorMessage("New password cannot be the same as the current password!");
            return;
        }

        // If validation passes
        setErrorMessage(""); // Clear error message
        alert("Settings saved successfully!");
    };

    return (
        <div style={styles.container1}>
            {/* Security Settings Section */}
            <div style={styles.securitySection}>
                <h4 style={styles.formTitle}>Security Settings</h4>
                {errorMessage && <div style={styles.errorMessage}>{errorMessage}</div>}
                <input
                    type="text"
                    placeholder="Username"
                    style={styles.input}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div style={styles.inputWrapper}>
                    <input
                        type={showCurrentPassword ? "text" : "password"}
                        placeholder="Current Password"
                        style={styles.input}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <span
                        style={styles.eyeIcon}
                        onClick={() => setShowCurrentPassword((prev) => !prev)}
                    >
                        {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <div style={styles.inputWrapper}>
                    <input
                        type={showNewPassword ? "text" : "password"}
                        placeholder="New Password"
                        style={styles.input}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <span
                        style={styles.eyeIcon}
                        onClick={() => setShowNewPassword((prev) => !prev)}
                    >
                        {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <button style={styles.button} onClick={handleSave}>
                    Save
                </button>
            </div>

            {/* Account Settings Section */}
            <div style={styles.accountSection}>
                <h2 style={styles.heading}>Account Settings</h2>
                <form>
                    <div style={styles.formGroup}>
                        <input
                            type="text"
                            placeholder="First Name"
                            style={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <input type="text" placeholder="City" style={styles.input} />
                        <input type="email" placeholder="Email" style={styles.input} />
                        <input type="text" placeholder="Country" style={styles.input} />
                    </div>
                    <div style={styles.textareaGroup}>
                        <textarea
                            placeholder="Address"
                            style={styles.textarea}
                            rows="3"
                        ></textarea>
                    </div>
                    <button style={styles.button}>Save Changes</button>
                </form>
            </div>
        </div>
    );
};
const styles = {
    container: {
        fontFamily: '"Roboto", serif',
        
    },
    logo: {
        textAlign: 'center',
        fontSize: '24px',
        color: '#ff4500',
        marginBottom: '20px',
    },
    profileSection: {
        textAlign: 'center',
        marginBottom: '30px',
    },
    menuList: {
        listStyle: 'none',
        padding: 0,
        color: '#000',
    },
    
    activeItem: {
        padding: '12px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: '#f0f3fb',
        borderRadius: '8px',
    },
    
    //Settings
    securitySection: {
        marginBottom: '5px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
    },
    accountSection: {
        marginTop: '5px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        fontFamily: '"Roboto", serif',
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
    },

    container1: {
        backgroundColor: "#f0f3fb",
        color: "black",
        height: "100vh", // Full height
        width: "100%",   // Full width
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        boxSizing: "border-box", // Ensure padding doesn't affect size
        position: "relative",
        fontFamily: '"Roboto", serif', 
    },

    heading: {
        fontSize: "20px",
        marginBottom: "8px",
    },
    form: {
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "100%", // Limit form width
        width: "100%", // Stretch form width to fit container
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
    },
    formTitle: {
        fontSize: "18px",
        marginBottom: "16px",
    },
    input: {
        backgroundColor: "#fff",
        color: "black",
        border: "1px solid #71757d",
        borderRadius: "4px",
        borderWidth: '2px',
        padding: "12px",
        width: "100%",
        marginBottom: "16px",
    },
    button: {
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        padding: "12px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "16px",
        width: "15%",
    },
    errorMessage: {
        color: "red",
        marginBottom: "10px",
        fontSize: "0.9rem",
        fontFamily: '"Titillium Web", serif',
    },
    eyeIcon: {
        position: "absolute",
        right: "10px",
        top: "40%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        fontSize: "1.2rem",
        color: "#888",
        transition: "transform 0.3s ease, opacity 0.3s ease",

    },
    inputWrapper: {
        position: "relative",
        marginBottom: "10px",
    },
    home: {
        fontSize: '20px',marginBottom: '2px',
    },
    formGroup: {
        display: "flex",
        gap: "20px",
        marginTop: "15px",
    },
    textareaGroup: {
        marginBottom: "15px",
    },
    textarea: {
        width: "100%",
        padding: "10px",
        borderRadius: "4px",
        border: "1px solid #444",
        backgroundColor: "#fff",
        color: "#e6e6e6",
        outline: "none",
        resize: "none",
    },

    //patient
    patientsContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f0f3fb",
        minHeight: "100vh",
        boxSizing: "border-box",
        fontFamily: '"Roboto", sans-serif',
    },
    patientCard: {
        backgroundColor: "#fff",
        color: "black",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    patientHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #374151",
        paddingBottom: "25px",
        fontFamily: '"Titillium Web", serif',
    },
    patientImage: {
        borderRadius: "50%",
        height: "50px",
        width: "50px",
    },
    patientName: {
        color: "#1ebd60",
        margin: "0",
        fontFamily: '"Titillium Web", serif',
    },
    patientTime: {
        textAlign: "right",
        fontSize: "14px",
    },
    patientDetails: {
        marginTop: "10px",
        fontSize: "14px",
        lineHeight: "2",
        fontFamily: '"Titillium Web", serif',
    },
    detailRow: {
        display: "flex",
        alignItems: "center", // Ensures icon and text are aligned horizontally
        gap: "8px", // Adds space between icon and text
        marginBottom: "5px",
    },
    separator: {
        borderTop: "1px solid #374151",
        margin: "10px 0",
    },
    readMore: {
        marginTop: "10px",
        alignSelf: "center",
        backgroundColor: "#1e90ff",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },

    //Doctors
    container3: {
        padding: "20px",
        fontFamily: '"Roboto", sans-serif',
        backgroundColor: "#f0f3fb",
        minHeight: "100vh",
        color: "black",
    },
    card3: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: "10px",
        marginBottom: "20px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
   
    image3: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        marginRight: "20px",
    },
    doctorDetails: {
        flex: 1,
        marginRight: "20px",
        fontFamily: '"Titillium Web", serif',
    },
    rating: {
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
    },
    ratingStars: {
        color: "#d4c302",
        marginLeft: "5px",
    },
    separatorColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    infoRow: {
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        fontFamily: '"Barlow Condensed", serif',
    },
    icon: {
        marginRight: "10px",
        color: "black",
    },
    description: {
        marginTop: "10px",
        color: "black",
        fontFamily: '"Titillium Web", serif',
    },
    name: {
        color: '#00bdd2',
    },

    //Appointments
    container5: {
        backgroundColor: "#f0f3fb",
        color: "black",
        padding: "20px",
        minHeight: "100vh",
        width: "100%",
    },
    form5: {
        backgroundColor: "#fff", // New background color for the form
        borderRadius: "10px", // Rounded corners for the form
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Box shadow for the form
        padding: "20px", // Padding inside the form
        marginTop: "20px", // Space above the form
        overflow: "hidden", // Ensures no content overflows the border radius
        fontFamily: '"Roboto", serif',
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
        borderBottom: "1px solid #000", // Optional: Add a divider below the header
        paddingBottom: "10px",
        fontFamily: '"Barlow Condensed", serif',
    },
    headerTitle: {
        fontSize: "24px",
        margin: 0,
    },
    searchBox: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#dae1f3", // Adjusted background color for the search box
        borderRadius: "5px",
        padding: "5px 10px",
    },
    searchInput: {
        backgroundColor: "transparent",
        border: "none",
        color: "white",
        outline: "none",
        marginLeft: "5px",
    },
    responsiveTable: {
        overflowX: "auto",
        width: "100%",
        marginTop: "20px", // Add some space above the table
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        minWidth: "800px",
    },
    th: {
        textAlign: "left",
        backgroundColor: "#dae1f3", // Adjusted background color for table headers
        color: "black",
        padding: "10px",
        fontSize: '15px',
        fontWeight: '500',
        borderBottom: "2px solid white", // Thicker border for headers
        fontFamily: '"Titillium Web", serif',
    },
    td: {
        padding: "11px",
        textAlign: "left",
        color: "black",

    },
    tr: {
        borderBottom: "1px solid #dae1f3",
        fontFamily: '"Roboto", serif',
        fontSize: '13px',
        
    },
    icon5: {
        marginRight: "5px",
        borderColor: 'red',
    },

    //Dashboard
        container7: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: '20px',
            boxSizing: 'border-box',
            fontFamily: '"Roboto", serif',
            backgroundColor: '#f0f3fb',
        },
        header7: {
            marginBottom: '10px',
            color: '#555',
        },
        welcomeText: {
            color: '#333',
            marginBottom: '5px',
            fontFamily: '"Titillium Web", serif',
        },
        nameText: {
            color: '#007BFF',
            fontSize: '24px',
            marginBottom: '10px',
            fontFamily: '"Titillium Web", serif',
        },
        form7: {
            display: 'flex', // Align content inside the form horizontally
            justifyContent: 'space-between', // Space between form content and image
            alignItems: 'center', // Align items vertically in the center
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
            boxSizing: 'border-box',
            width: '100%',
        },
        formContent: {
            flex: 1, // Allow the form content to take most of the space
        },
        illustration: {
            flex: 0.5, // Allow the image to take 50% of the remaining space
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            width: '100%', // Allow the image to fill the available space
            maxWidth: '500px', // Limit the image size
            height: 'auto', // Maintain aspect ratio
            borderRadius: '10px', // Optional: Rounded corners for a polished look
        },
        cardContainer: {
            display: 'flex',
            gap: '15px',
            width: '20px',
            marginTop: '20px', 
            fontFamily: '"Titillium Web", serif',
        },
        card: {
            padding: '15px',
            borderRadius: '8px',
            color: '#333',
            fontWeight: 'bold',
            fontSize: '16px',
            minWidth: '120px',
            textAlign: 'left',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        },
        appointments: { backgroundColor: '#D8BFD8' },
        surgeries: { backgroundColor: '#FFB6C1' },
        roomVisit: { backgroundColor: '#98FB98' },
    chartContainer: {
        display: 'flex', // Flexbox layout
        justifyContent: 'space-between', // Add spacing between the two charts
        alignItems: 'center', // Vertically align the items
        gap: '20px', // Gap between the two cards
        padding: '20px',
        backgroundColor: '#f0f3fb',
    },
    chartCard: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        padding: '20px',
        width: '100%',
        flex: 1, // Will be overridden by flex: 6 or flex: 4
    },
    chartTitle: {
        fontSize: '17px',
        fontWeight: '500',
        marginBottom: '20px',
    },
    pieLabel: {
        textAlign: 'center',
        marginTop: '10px',
        fontWeight: '400',
        fontFamily: '"Titillium Web", serif',
    },
    container9: {
        display: "flex",
        gap: "20px",
        padding: "20px",
        backgroundColor: " #f0f3fb",
    },
    section: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.5)",
        padding: "15px",
        overflow: "hidden",
    },
    header9: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "15px",
        fontSize: '17px',
        fontWeight: '500',
    },
    table9: {
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "16px",
        fontFamily: '"Titillium Web", serif',
        textAlign: "left",
    },
    tableCell: {
        fontFamily: '"Barlow Condensed", serif',
        fontSize: '15px',
        padding: "8px",
        borderBottom: "1px solid #f1f1f1",
    },
    badge: {
        padding: "3px 8px",
        borderRadius: "15px",
        color: "#fff",
        fontSize: "12px",
        fontWeight: "bold",
    },
    pdfIcon: {
        color: "#d32f2f",
    },
    detailsLink: {
        color: "#007bff",
        textDecoration: "none",
    },
    patientGroupsList: {
        listStyle: "none",
        padding: 0,
        fontFamily: '"Titillium Web", serif',
    },
    patientGroupsItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 0",
        borderBottom: "1px solid #f1f1f1",
    },
    icon9: {
        fontWeight: "bold",
        fontSize: "16px",
        color: "#fff",
        padding: "5px",
        borderRadius: "50%",
        textAlign: "center",
        width: "30px",
        height: "30px",
        backgroundColor: "#ccc",
    },
    patientsCount: {
        color: "#777",
    },

    container10: {
        display: "flex",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f0f3fb",
    },
    card10: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.5)",
        padding: "15px",
    },
    header10: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "15px",
        fontSize: '15px',
        fontWeight: '500',
        fontFamily: '"Roboto", serif',
    },
    todoList: {
        listStyle: "none",
        padding: 0,
    },
    todoItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 0",
        borderBottom: "1px solid #f1f1f1",
    },
    checkbox: {
        marginRight: "10px",
    },
    priority: (level) => ({
        fontFamily: '"Titillium Web", serif',
        fontSize: "12px",
        fontWeight: "bold",
        padding: "3px 8px",
        borderRadius: "15px",
        backgroundColor:
            level === "High"
                ? "#ffccd2"
                : level === "Normal"
                    ? "#ffe082"
                    : "#c8e6c9",
        color: level === "High" ? "#d32f2f" : "#333",
    }),
};

export default Sidebar;