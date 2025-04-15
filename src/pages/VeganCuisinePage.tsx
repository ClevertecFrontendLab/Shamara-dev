import { Button, Flex } from '@chakra-ui/react';

import MostPopularCard from '~/components/MostPopularCard';
import RelevantKitchen from '~/components/RelevantKitchen';
import SearchRecipe from '~/components/SearchRecipe';
import { mockVegan } from '~/constants/mockVegan';

const VeganCuisinePage = () => (
    <Flex
        mt={20}
        mb='100px'
        mx={{ base: 4, md: 5, lg: '280px' }}
        flexDirection='column'
        gap={{ base: 8, lg: 6 }}
    >
        <SearchRecipe
            title='Веганская кухня'
            description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
        />
        <Flex flexDirection='column' gap={10}>
            <Flex flexDirection='column' gap={4} alignItems='center'>
                <Flex flexWrap='wrap' gap={{ base: 4, lg: 6 }}>
                    {mockVegan.map((recipe) => (
                        <MostPopularCard key={recipe.id} recipe={recipe} />
                    ))}
                </Flex>
                <Button bg='lime.400'>Загрузить еще</Button>
            </Flex>
            <RelevantKitchen />
        </Flex>
    </Flex>
);

export default VeganCuisinePage;
