import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoImg from '@assets/logo.png'
import { useNavigation } from "@react-navigation/native";

type ButtonProps = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: ButtonProps) {
  
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('groups');
  }
  
  return(
    <Container>
      {
        showBackButton &&
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      }
      <Logo source={logoImg}/>
    </Container>
  )
}