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
      radius="xl"
      withBorder
      style={{
        cursor: 'pointer',
        background: isFree ? '#f0fdf4' : '#f9fafb',
        borderColor: isFree ? '#86efac' : '#e5e7eb',
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
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px'
            }} 
          />
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
              c={isFree ? '#166534' : '#111827'}
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
            color={isFree ? 'green' : 'gray'}
            size="sm"
            radius="sm"
            style={{
              backgroundColor: isFree ? 'rgba(34, 197, 94, 0.2)' : 'rgba(156, 163, 175, 0.2)',
              color: isFree ? '#166534' : '#374151',
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

        {/* Badge gratuit */}
        {isFree && (
          <Group justify="center">
            <Badge
              color="green"
              variant="filled"
              size="sm"
              radius="sm"
              fw={700}
            >
              GRATUIT
            </Badge>
          </Group>
        )}
        </Stack>
      </Stack>
    </Card>
  );
};

export default GameCard;