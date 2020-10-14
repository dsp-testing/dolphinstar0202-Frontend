import { IconContainer, Caption, BigText, Paragraph, Link } from '@/components/home/common'
import { GradientLockup } from '@/components/GradientLockup'
import { Tabs } from '@/components/Tabs'
import { CodeWindow } from '@/components/CodeWindow'
import { gradients } from '@/utils/gradients'
import { ReactComponent as Icon } from '@/img/icons/home/build-anything.svg'

export function BuildAnything() {
  return (
    <section>
      <div className="px-8 mb-20">
        <IconContainer className={`${gradients.orange} mb-8`}>
          <Icon />
        </IconContainer>
        <Caption as="h2" className="text-orange-600 mb-3">
          Build anything
        </Caption>
        <BigText className="mb-8">Build whatever you want, seriously.</BigText>
        <Paragraph className="mb-6">
          Because Tailwind is so low-level, it never encourages you to design the same site twice.
          Even with the same color palette and sizing scale, it's easy to build the same component
          with a completely different look in the next project.
        </Paragraph>
        <Link href="#" className="text-orange-600">
          Learn more -&gt;
        </Link>
      </div>
      <GradientLockup
        color="orange"
        rotate={-2}
        header={
          <div className="-ml-4">
            <Tabs tabs={['Simple', 'Playful', 'Elegant', 'Brutalist']} />
          </div>
        }
        left={undefined}
        right={<CodeWindow className="bg-pink-600" />}
      />
    </section>
  )
}
