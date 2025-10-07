import React from 'react';
import { Card, Badge, Group, Text, Stack, Button } from '@mantine/core';
import { UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline';

interface GameCardProps {
  name: string;
  modeDeJeu: string;
  players: string;
  duration: string;
  shortDescription: string;
  icon: string;
  coverImage: string;
  material?: string;
  isFree?: boolean;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({
  name,
  modeDeJeu,
  players,
  duration,
  shortDescription,
  icon,
  coverImage,
  material,
  isFree = false,
  onClick
}) => {
  return (
    <Card
      shadow="md"
      padding={0}
      radius="md"
      withBorder
      style={{
        cursor: 'pointer',
        background: '#f9fafb',
        borderColor: '#e5e7eb',
        transition: 'all 0.2s ease',
        overflow: 'hidden'
      }}
      onClick={onClick}
      className="hover:shadow-lg"
    >
      <Stack gap={0} h="100%">
        {/* Image de couverture */}
        <div style={{ 
          height: '140px', 
          width: '100%', 
          position: 'relative',
          overflow: 'hidden'
        }}>
          <img 
            src={coverImage} 
            alt={`${name} cover`} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              borderTopLeftRadius: '6px',
              borderTopRightRadius: '6px'
            }} 
          />
          {/* Badge premium en haut à gauche */}
          {!isFree && (
            <div style={{
              position: 'absolute',
              top: '8px',
              left: '8px',
              backgroundColor: 'rgba(162, 89, 255, 0.9)',
              color: 'white',
              padding: '2px 6px',
              borderRadius: '4px',
              fontSize: '10px',
              fontWeight: 700,
              textTransform: 'uppercase',
              zIndex: 1
            }}>
              PREMIUM
            </div>
          )}
        </div>

        {/* Contenu de la carte */}
        <Stack gap="md" p="lg" justify="space-between" style={{ flexGrow: 1 }}>
          {/* Header avec icône et titre */}
          <Group gap="sm" wrap="nowrap">
            <img 
              src={icon} 
              alt={`${name} icon`} 
              style={{ width: 28, height: 28, objectFit: 'contain' }} 
            />
            <Text 
              fw={600} 
              size="lg" 
              c={'#111827'}
              lineClamp={1}
              style={{ flex: 1 }}
            >
              {name}
            </Text>
          </Group>

        {/* Badge du mode de jeu */}
        <Group>
          <Badge
            variant="light"
            color={'pink'}
            size="sm"
            radius="sm"
            className="bg-party-pink/20 text-party-pink"
            style={{
              fontWeight: 600
            }}
          >
            {modeDeJeu}
          </Badge>
        </Group>

        {/* Description */}
        <Text size="sm" c="dimmed" style={{ flexGrow: 1 }}>
          {shortDescription}
        </Text>

        {/* Informations joueurs et durée */}
        <Group gap="lg" mt="auto">
          <Group gap="xs">
            <UserGroupIcon style={{ width: 16, height: 16, color: '#6b7280' }} />
            <Text size="sm" c="dimmed" fw={500}>
              {players} joueurs
            </Text>
          </Group>
          <Group gap="xs">
            <ClockIcon style={{ width: 16, height: 16, color: '#6b7280' }} />
            <Text size="sm" c="dimmed" fw={500}>
              {duration}
            </Text>
          </Group>
        </Group>

        {/* Matériel inclus (pour les jeux premium) */}
        {material && (
          <Card.Section p="sm" style={{ backgroundColor: 'rgba(243, 244, 246, 0.8)' }}>
            <Text fw={600} size="xs" c="dimmed" mb={4}>
              Inclus :
            </Text>
            <Text size="xs" c="dimmed">
              {material}
            </Text>
          </Card.Section>
        )}

        </Stack>
      </Stack>
    </Card>
  );
};

export default GameCard;