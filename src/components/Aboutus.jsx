import Doctors from "./images/illlustration.png";
const Aboutus = () => {
    const styles = {
        section: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "50px",
            backgroundColor: "#f9f9f9",
        },
        leftContent: {
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        rightContent: {
            flex: "1",
            paddingLeft: "30px",
        },
        heading: {
            fontFamily: "'Inter', sans- serif",
            color: "#1E0B9B",
            fontSize: "16px",
            fontWeight: "500",
            marginBottom: "10px",
            letterSpacing: "2px",
        },
        box: {
            backgroundColor: "#d2ceeb", 
            padding: "5px 0px",
        },
        title: {
            fontSize: "46px",
            fontFamily: "'Titillium Web', sans-serif",
            color: "#013243",
            marginTop: "0px",
            fontStyle: "normal",
            fontWeight: "700px",
            marginBottom: "20px",
        },
        description: {
            fontFamily: "'Fira Sans', sans- serif",
            fontSize: "20px",
            color: "#555",
            lineHeight: "1.8",
            marginBottom: "20px",
        },
        list: {
            listStyle: "none",
            padding: "0",
        },
        listItem: {
            fontFamily: "'Fira Sans', sans- serif",
            fontSize: "20px",
            color: "#555",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
        },
        bulletIcon: {
            display: "inline-block",
            width: "10px",
            height: "10px",
            marginRight: "10px",
            backgroundColor: "#6f1d9b",
            borderRadius: "50%",
        },
        image: {
            maxWidth: "100%",
            height: "auto",
        },
    };

    return (
        <div id="about">
        <section style={styles.section}>
            {/* Left Image Content */}
            <div style={styles.leftContent}>
                <img
                    src={Doctors} // Replace with the path to your image
                    alt="Doctors"
                    style={styles.image}
                />
            </div>
            <div style={styles.rightContent}>
                <h4 style={styles.heading}><span style={styles.box}>ABO</span>UT US</h4>
                <h2 style={styles.title}>We Are Revolutionizing Hospital Management</h2>
                <p style={styles.description}>
                    Managing healthcare data and appointments has never been easier. Our Hospital Management System ensures seamless interaction between doctors and patients, enabling efficient management of appointments, test results, and medical records all in one place.
                </p>
                <ul style={styles.list}>
                    <li style={styles.listItem}>
                        <span style={styles.bulletIcon}></span> Simplify appointment scheduling for doctors and patients.
                    </li>
                    <li style={styles.listItem}>
                        <span style={styles.bulletIcon}></span> Easily track medical test results and history.
                    </li>
                    <li style={styles.listItem}>
                        <span style={styles.bulletIcon}></span> Ensure secure storage and quick access to healthcare data.
                    </li>
                </ul>
            </div>
        </section>
    </div>
    );
};

export default Aboutus;
