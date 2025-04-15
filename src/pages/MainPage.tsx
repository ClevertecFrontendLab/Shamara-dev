import { Flex } from '@chakra-ui/react';

import Blogs from '~/components/Blogs';
import MostPopular from '~/components/MostPopular';
import NewRecipes from '~/components/NewRecipes';
import RelevantKitchen from '~/components/RelevantKitchen';
import SearchRecipe from '~/components/SearchRecipe';

const MainPage = () => (
    <Flex
        mt={20}
        mb={{ base: '100px', lg: 0 }}
        mx={{ base: 4, md: 5, lg: '280px' }}
        flexDirection='column'
        gap={{ base: 8, lg: 6 }}
    >
        <SearchRecipe title='Приятного аппетита!' />
        <Flex flexDirection='column' gap={10}>
            <NewRecipes />
            <MostPopular />
            <Blogs />
            <RelevantKitchen />
        </Flex>
    </Flex>
);

export default MainPage;
