import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/packages/components/ui/form";
import { LoginParametersSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/auth/Credenza";
import { Input } from "@/packages/components/ui/input";
import { Button } from "@/packages/components/ui/button";
import { LoginParameters } from "@/schemas/auth/types";
import { useLogin } from "@/hooks/apis/user/useLogin";

type Props = {};

export const LoginForm = (props: Props) => {
  const login = useLogin();
  const method = useForm<LoginParameters>({
    resolver: zodResolver(LoginParametersSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: LoginParameters) => {
    try {
      console.log("data", data);
      const response = await login.mutateAsync(data);
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <Form {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)} className="space-y-8">
        <CredenzaContent>
          <CredenzaHeader>
            <CredenzaTitle className="text-left text-[#212121] text-[20px] font-[600]">
              パスワードを入力
            </CredenzaTitle>
          </CredenzaHeader>
          <CredenzaBody>
            <FormField
              control={method.control}
              name="identity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ユーザー名</FormLabel>
                  <FormControl>
                    <Input placeholder="＠テキスト" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={method.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>パスワード</FormLabel>
                  <FormControl>
                    <Input placeholder="＠テキスト" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CredenzaBody>
          <CredenzaFooter>
            <Button
              className="bg-[#1976D2] hover:bg-[#1976D2]"
              onClick={method.handleSubmit(onSubmit)}
              type="submit"
            >
              ログイン
            </Button>
            <CredenzaClose asChild>
              <Button variant="link">
                アカウントをお持ちでない場合は新規登録
              </Button>
            </CredenzaClose>
          </CredenzaFooter>
        </CredenzaContent>
      </form>
    </Form>
  );
};
