import { Center, Spinner } from "native-base";

export function Loading(){
    return(
        <Center flex={1} bg="gray.700">
            <Spinner color="tertiary.500" size="lg"/>
        </Center>
    )
}