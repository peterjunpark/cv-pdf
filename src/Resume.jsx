import {
  Font,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

// Register font
Font.register({
  family: "Lato",
  src: "http://fonts.gstatic.com/s/lato/v13/v0SdcGFAl2aezM9Vq_aFTQ.ttf",
  fontStyle: "normal",
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    fontFamily: "Lato",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
export const Resume = () => (
  <Document title="Peter Jun Park" author="Peter Jun Park" subject="Resume">
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Peter Jun Park</Text>
        <Text>Hello!</Text>
      </View>
      {/* <View style={styles.section}> */}
      {/*   <Text>Section #2</Text> */}
      {/* </View> */}
    </Page>
  </Document>
);
