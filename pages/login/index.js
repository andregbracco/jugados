import LoginPage from "@/components/pages/LoginPage";

const data = {
  name: "jengi",
  lastName: "soria",
};

export async function getServerSideProps() {
  return {
    props: {
      data,
    },
  };
}

export default LoginPage;
