import { Badge } from '@chakra-ui/icons';
import { Avatar } from '@chakra-ui/react';

import { badge } from '~/components/badges';
import { Recommendation } from '~/utils';

type Props = {
    recommendation: Recommendation;
};

export const BadgeWithRecommendations = ({ recommendation }: Props) => (
    <Badge sx={badge} bg='lime.150' h={7} p='0.25rem 0.5rem' pos='absolute' left={6} bottom={5}>
        <Avatar boxSize={4} src={recommendation.avatar} />
        {recommendation.name} рекомендует
    </Badge>
);
