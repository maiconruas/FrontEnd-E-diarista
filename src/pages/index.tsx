import {NextPage} from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
        <PageTitle
            title={'Conheça os profissionais'}
            subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
        />

      <UserInformation
        name={'Maicon Ruas'}
        picture={'http://github.com/maiconruas.png'}
        rating={4}
        description={'Sapucaia do Sul'}
      />
    </div>
  )
}

export default Home
