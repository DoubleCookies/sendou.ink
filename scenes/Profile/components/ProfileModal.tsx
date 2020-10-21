import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/core";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UpdateUserProfileInput,
  useUpdateUserProfileMutation,
} from "generated/graphql";
import { useTranslation } from "lib/useMockT";
import { useForm } from "react-hook-form";
import { ProfileSchema } from "validators/Profile";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const { handleSubmit, errors, register } = useForm<UpdateUserProfileInput>({
    resolver: zodResolver(ProfileSchema),
  });
  const [updateUserProfile] = useUpdateUserProfileMutation();

  const onSubmit = async (data: UpdateUserProfileInput) => {
    Object.keys(data).forEach((key) => {
      const typedKey = key as keyof typeof data;
      if (data[typedKey] === "") {
        data[typedKey] = null;
      }
    });

    await updateUserProfile({ variables: { profile: data } });
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay>
        <ModalContent /*bg={secondaryBgColor}*/>
          <ModalHeader>{t("users;Editing profile")}</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pb={6}>
              <FormControl isInvalid={!!errors.customUrlPath}>
                <FormLabel htmlFor="customUrlPath">
                  {t("users;Custom URL")}
                </FormLabel>
                <InputGroup>
                  <InputLeftAddon children="https://sendou.ink/u/" />
                  <Input
                    name="customUrlPath"
                    ref={register}
                    placeholder={t("users;Custom URL")}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.customUrlPath?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.twitterName}>
                <FormLabel htmlFor="twitterName" mt={4}>
                  {t("users;Twitter name")}
                </FormLabel>
                <InputGroup>
                  <InputLeftAddon children="https://twitter.com/" />
                  <Input
                    name="twitterName"
                    ref={register}
                    placeholder={t("users;Twitter name")}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.twitterName?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.twitchName}>
                <FormLabel htmlFor="twitchName" mt={4}>
                  {t("users;Twitch name")}
                </FormLabel>
                <InputGroup>
                  <InputLeftAddon children="https://twitch.tv/" />
                  <Input
                    name="twitchName"
                    ref={register}
                    placeholder={t("users;Twitch name")}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.twitchName?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.youtubeId}>
                <FormLabel htmlFor="youtubeId" mt={4}>
                  {t("users;YouTube channel ID")}
                </FormLabel>
                <InputGroup>
                  <InputLeftAddon children="https://youtube.com/channel/" />
                  <Input
                    name="youtubeId"
                    ref={register}
                    placeholder={t("users;YouTube channel ID")}
                  />
                </InputGroup>
                <FormErrorMessage>{errors.youtubeId?.message}</FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose} variant="outline">
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default ProfileModal;