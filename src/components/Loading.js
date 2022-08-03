import { Center, Spinner } from "native-base";

export function Loading(){
    return(
        <Center flex={1} bg="white">
            <Spinner color="tertiary.500" size="lg"/>
        </Center>
    )
}