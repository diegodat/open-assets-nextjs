import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/packages/components/ui/form";
import { LoginSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/auth/Credenza";
import { Input } from "@/packages/components/ui/input";
import { Button } from "@/packages/components/ui/button";
import { z } from "zod";

type Props = {};

export type LoginFields = z.infer<typeof LoginSchema>;

export const LoginForm = (props: Props) => {
  const method = useForm<LoginFields>({
    resolver: zodResolver(LoginSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  return (
    <Form {...method}>
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
            // onClick={props.onSubmit}
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
    </Form>
  );
};
