'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface TechGridProps {
  title: string;
}

export default function TechGrid({ title }: TechGridProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fonction utilitaire pour obtenir l'icône et la couleur d'une technologie
  const getTechnologyIcon = (tech: string): { icon: IconDefinition | string; iconColor: string; isCustomIcon?: boolean } => {
    const currentTheme = mounted ? resolvedTheme : 'light';

    switch(tech.toLowerCase()) {
      case 'anthropic':
        return { icon: '/icons/tech/anthropic.svg', iconColor: "#00f65e", isCustomIcon: true };
      case 'hugging face':
        return { icon: '/icons/tech/huggingface.svg', iconColor: "#00f65e", isCustomIcon: true };
      case 'tensorflow':
        return { icon: '/icons/tech/tensorflow.svg', iconColor: "#FF6F00", isCustomIcon: true };
      case 'pytorch':
        return { icon: '/icons/tech/pytorch.svg', iconColor: "#EE4C2C", isCustomIcon: true };
      case 'langchain':
        return { icon: '/icons/tech/langchain.svg', iconColor: "#00f65e", isCustomIcon: true };
      case 'ollama':
        return {
          icon: currentTheme === 'dark' ? '/icons/tech/ollama-white.svg' : '/icons/tech/ollama-black.svg',
          iconColor: "#000000",
          isCustomIcon: true
        };
      case 'crewai':
        return { icon: '/icons/tech/crewai-color.svg', iconColor: "#00f65e", isCustomIcon: true };
      case 'aws bedrock':
        return { icon: '/icons/tech/aws-bedrock.svg', iconColor: "#00f65e", isCustomIcon: true };
      case 'aws sagemaker':
        return { icon: '/icons/tech/aws-sagemaker.svg', iconColor: "#00f65e", isCustomIcon: true };
      default:
        return { icon: faCode, iconColor: "#00f65e" };
    }
  };

  // Fonction utilitaire pour obtenir les technologies
  const getTechnologies = (): string[] => {
    return [
      "Anthropic",
      "Hugging Face",
      "Ollama",
      "TensorFlow",
      "PyTorch",
      "Langchain",
      "CrewAI",
      "AWS Bedrock",
      "AWS SageMaker",
    ];
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">{title}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {getTechnologies().map((tech: string, index: number) => {
            const { icon, iconColor, isCustomIcon } = getTechnologyIcon(tech);
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105">
                <div style={{ color: iconColor }} className="text-4xl mb-4 h-[1.5em] flex items-center justify-center">
                  {isCustomIcon ? (
                    <Image
                      src={icon as string}
                      alt={tech}
                      width={24}
                      height={24}
                      className="w-[1em] h-[1em]"
                    />
                  ) : (
                    <FontAwesomeIcon icon={icon as IconDefinition} className="w-[1em] h-[1em]" />
                  )}
                </div>
                <h3 className="font-bold dark:text-white">{tech}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
